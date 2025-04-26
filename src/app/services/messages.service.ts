import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MessagesService {
    private http = inject(HttpClient)
    getMessages(): any {
            this.http.get('http://localhost:5000/messages').pipe(
                map((res: any) => {
                     return res.map((message: any) => {
                         const isEqual = message.from == '5511987650086@c.us'
                         return {
                             ...message,
                             fromMe: isEqual
                         }
                     })
                })
            ).subscribe((messages: any) => {
                console.log(messages)
            })
    }
}