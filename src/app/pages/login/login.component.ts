import { Component, inject, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    template: `
    <div class="login-container">
  <h2>Escaneie o QR Code para entrar</h2>
  <div>
  @if (qrCodeData()) {
    <img [src]="qrCodeData()">
  }
  </div>
  <ng-template #loading>
    <p>Carregando QR Code...</p>
  </ng-template>
</div>
`,
    styleUrls: ['login.component.scss'],
    imports: []
})
export class LoginComponent implements OnInit{
    qrCodeData = signal<string | null>(null);
    socket: WebSocket | null = null;
    private router = inject(Router)
    ngOnInit(): void {
        this.socket = new WebSocket('ws://localhost:5000')

        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data)

            if (data.type === 'qr') {
                this.qrCodeData.set(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data.qr)}`)
            }

            if(data.type == 'status' && data.message == 'Client is ready!'){
                console.log('Client is ready!')
                this.router.navigate(['conversations'])
            }

        }
    }
}