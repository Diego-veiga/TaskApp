import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor() {}

  async get<T>(url: string, headers?: any): Promise<any> {
    try {
      const response = await axios.get(url);
      const { data } = response.data;
      return data;
    } catch (e) {}
  }

  async post<T>(url: string, body: any, headers?: any): Promise<any> {
    const response = await axios.post(`${url}`, body);
    return response.data;
  }

  async put<T>(url: string, body?: any, headers?: any): Promise<any> {
    const response = await axios
      .create({
        headers,
      })
      .put(`${url}`, body);
    return response.data;
  }

  async patch<T>(url: string, body?: any): Promise<any> {
    const response = await axios.patch(`${url}`, body);
    return response.data;
  }

  async delete<T>(url: string): Promise<any> {
    const response = await axios.delete(`${url}`);
    return response.data;
  }
}
