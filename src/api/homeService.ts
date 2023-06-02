
export class HomeService {
    static async fetchHomeData(): Promise<Response> {
        const response = fetch("./data.json",
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })            
        return response;
    }
}