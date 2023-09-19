
export class SomethingService {

    public async getAllSomethings(): Promise<any> {
        const response = await fetch('/api/somethings');
        return await response.json();
    }

    public async createSomething(data: any): Promise<any> {
        
        const response = await fetch(`/api/something`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({something: data})
        })
        return await response.json();
    }

    public async deleteSomething(somethingId: number): Promise<any> {
        const response = await fetch(`/api/something/${somethingId}`, {method: 'DELETE'})
        return await response.json();
    }

    public async editSomething(data: any): Promise<any> {
        const response = await fetch(`/api/something`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({something: data})
        })
        return await response.json();
    }
}