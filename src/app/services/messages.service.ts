import { HttpClient } from "@angular/common/http";
import { effect, inject, Injectable, signal } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MessagesService {
    private http = inject(HttpClient);
    private contacts = signal<any[]>([]);

    constructor() {
        effect(() => {
            console.table(this.contacts());
        })
    }

    getContacts() {
        return this.contacts.asReadonly();
    }

    getMessages() {
        return this.contacts.asReadonly();
    }

    setMessages(messages: any[]) {
        this.contacts.set(messages);
    }

    fetchMessages(): void {
        this.http.get('http://localhost:5000/messages').pipe(
            map((res: any) => {
                const messages = res.map((message: any) => {
                    const fromMe = message.from === '5513996738213@c.us';
                    return {
                        ...message,
                        fromMe
                    };
                });

                const contactMap: any = {};

                for (const msg of messages) {
                    const number = msg.fromMe ? msg.to : msg.from;

                    if (!contactMap[number]) {
                        contactMap[number] = {
                            name: number,
                            number: number,
                            messages: []
                        };
                    }

                    contactMap[number].messages.push(msg);
                }

                const contactsArray = Object.values(contactMap);
                return contactsArray;
            })
        ).subscribe((contacts: any) => {
            this.contacts.set(contacts);
            console.log(contacts);
        });
    }
}
