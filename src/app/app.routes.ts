import { Routes } from '@angular/router';
import { ChatComponent } from './features/chat/chat.component';

export const routes: Routes = [
    //Ruta raiz que redirige automaticamente a chat
    {path: '', redirectTo: 'chat', pathMatch: 'full'},
    //Ruta /chat que renderiza ChatComponet
    {path: 'chat', component: ChatComponent},
    // Ruta comidin que redirige cualquier otra ruta a 'chat'
    { path : '**', redirectTo: 'chat'}
];
