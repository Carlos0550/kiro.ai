import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class HttpService {
    async get<T = any>(url: string): Promise<T> {
        const response = await fetch(url);
        const data = await response.json();
        
        if (!response.ok) {
            throw new HttpException(data, response.status);
        }
        return data;
    }

    async post<T = any>(url: string, data: any): Promise<T> {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        
        if (!response.ok) {
            throw new HttpException(responseData, response.status);
        }
        return responseData;
    }

    async put<T = any>(url: string, data: any): Promise<T> {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        const responseData = await response.json();
        
        if (!response.ok) {
            throw new HttpException(responseData, response.status);
        }
        return responseData;
    }

    async delete<T = any>(url: string): Promise<T> {
        const response = await fetch(url, {
            method: 'DELETE',
        });
        
        const responseData = await response.json();
        
        if (!response.ok) {
            throw new HttpException(responseData, response.status);
        }
        return responseData;
    }
}
