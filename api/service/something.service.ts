import { SomethingRepository } from '../repository/something.repository';

export class SomethingService {

    private SomethingRepository: SomethingRepository;

    constructor() {
        this.SomethingRepository = new SomethingRepository();
    }

    async getSomethings() {
        return await this.SomethingRepository.getSomethings();
    }

    async createSomething(something) {
        return await this.SomethingRepository.createSomething(something);
    }

    async updateSomething(something) {
        return await this.SomethingRepository.updateSomething(something);
    }

    async deleteSomething(somethingId) {
        return await this.SomethingRepository.deleteSomething(somethingId);
    }

}