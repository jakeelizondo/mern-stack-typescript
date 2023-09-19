import { connect, disconnect } from "../config/db.config";
import { SomethingModel } from '../model/something.model';
import { APILogger } from '../logger/api.logger';

export class SomethingRepository {

    private logger: APILogger;

    constructor() {
        connect();
        this.logger = new APILogger()
    }

    async getSomethings() {
        const somethings = await SomethingModel.find({});
        console.log('somethings:::', somethings);
        return somethings;
    }

    async createSomething(Something) {
        let data = {};
        try {
            data = await SomethingModel.create(Something);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async updateSomething(Something) {
        let data = {};
        try {
            data = await SomethingModel.updateOne(Something);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deleteSomething(SomethingId) {
        let data: any = {};
        try {
            data = await SomethingModel.deleteOne({_id : SomethingId});
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
}