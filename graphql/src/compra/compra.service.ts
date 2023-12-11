import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { Model } from 'mongoose'; // Importa Model desde mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Compra } from './entities/compra.entity';

@Injectable()
export class CompraService {
  private readonly logger = new Logger('CompraService');

  constructor(
    @InjectModel('compras')
    private readonly compraModel: Model<Compra>,
  ) {}

  async create(createCompraDto: CreateCompraDto) {
    try {
      const compra = new this.compraModel(createCompraDto);
      await compra.save();
      return compra;
    } catch (error) {
      console.log(error);
      if (error.code === 11000)
        throw new BadRequestException('Registro duplicado');
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    return this.compraModel.find({}).exec();
  }

  private parseDateString(dateString: string): Date {
    // Parsea la cadena de fecha en formato "DD/MM/YYYY"
    const [day, month, year] = dateString.split('/');
    const parsedDate = new Date(`${year}-${month}-${day}`);

    // Asegúrate de manejar adecuadamente la validación de fechas aquí si es necesario

    return parsedDate;
  }

  async findByDateRange(startDate: string, endDate: string): Promise<Compra[]> {
    // Convierte las cadenas de fecha en objetos Date
    const startDateObj = this.parseDateString(startDate);
    const endDateObj = this.parseDateString(endDate);

    // Realiza la búsqueda en la base de datos
    let compras = await this.compraModel.find().exec();
    compras = compras.filter((compra) => {
      const compraDate = this.parseDateString(compra.fecha_compra.trim());
      if (compraDate >= startDateObj && compraDate <= endDateObj) {
        return compra;
      }
    });
    return compras;
  }

  async findOne(id: string) {
    const compra = await this.compraModel.findById(id).exec();
    if (!compra) {
      throw new NotFoundException(`Compra ${id} no encontrado`);
    }
    return compra;
  }

  async update(id: string, updateCompraDto: UpdateCompraDto) {
    const compra = await this.compraModel
      .findByIdAndUpdate(id, updateCompraDto, { new: true })
      .exec();
    if (!compra) {
      throw new NotFoundException(`Compra ${id} no encontrado`);
    }
    return compra;
  }

  async remove(id: string) {
    const compra = await this.findOne(id);
    await compra.updateOne({ active: false });
    return compra;
  }

  async updateAllActive() {
    await this.compraModel.updateMany({ active: true });
  }

  prueba(): string[] {
    return ['uno', 'dos', 'tres'];
  }
}
