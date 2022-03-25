import { Routes } from '@angular/router';

import { InboxComponent } from '../../pages/inbox/inbox.component';
import { SentComponent } from '../../pages/sent/sent.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'inbox', component: InboxComponent },
  { path: 'sent', component: SentComponent },
];
