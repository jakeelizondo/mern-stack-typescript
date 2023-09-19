import { APILogger } from '../logger/api.logger';
import { SomethingService } from '../service/something.service';

export class SomethingController {

    private SomethingService: SomethingService;
    private logger: APILogger;

    constructor() {
        this.SomethingService = new SomethingService();
        this.logger = new APILogger()
    }

    async getSomethings() {
        this.logger.info('Controller: getSomethings', null)
        return await this.SomethingService.getSomethings();
    }

    async createSomething(Something) {
        this.logger.info('Controller: createSomething', Something);
        return await this.SomethingService.createSomething(Something);
    }

    async updateSomething(Something) {
        this.logger.info('Controller: updateSomething', Something);
        return await this.SomethingService.updateSomething(Something);
    }

    async deleteSomething(SomethingId) {
        this.logger.info('Controller: deleteSomething', SomethingId);
        return await this.SomethingService.deleteSomething(SomethingId);
    }
}