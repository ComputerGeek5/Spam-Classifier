import { Routes } from '@angular/router';

import { InboxComponent } from '../../pages/inbox/inbox.component';
import { SentComponent } from '../../pages/sent/sent.component';
import {AuthGuard} from '../../security/guard/auth.guard';
import {Role} from '../../model/Role';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'inbox',
    component: InboxComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.USER] }
  },
  {
    path: 'sent',
    component: SentComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.USER] }
  },
];
