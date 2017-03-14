import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { LoginPage } from '../pages/login/login';
import { ThemePage } from '../pages/theme/theme';
import { TopicPage } from '../pages/topic/topic';
// easy Datail Page
import { CardDetailPage } from '../pages/card-detail/card-detail';
import {TopicDetailPage} from '../pages/topic-detail/topic-detail';
import {MediumDetailPage} from '../pages/medium-detail/medium-detail';
import {HardDetailPage} from '../pages/hard-detail/hard-detail';



// Providers
import {Account} from '../providers/account.provider';
import {EasyCard} from '../providers/easy-card.provider';
import {HardCard} from '../providers/hard-card.provider';
import {MediumCard} from '../providers/medium-card.provider';
import {Topic} from '../providers/topic.provider';
import{ConnectionProvider} from '../providers/connection.provider';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ThemePage,
    TopicPage,
    CardDetailPage,
    TopicDetailPage,
    MediumDetailPage,
    HardDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ThemePage,
    TopicPage,
    CardDetailPage,
    TopicDetailPage,
    MediumDetailPage,
    HardDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
  Account, 
  EasyCard, 
  MediumCard, 
  HardCard, 
  Topic,
  ConnectionProvider ]
})
export class AppModule {}
