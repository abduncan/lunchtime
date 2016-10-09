import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {
    public get API_ENDPOINT(): string { return 'http://localhost:50723/'; }
}