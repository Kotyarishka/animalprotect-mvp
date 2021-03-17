import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';

import Section from './components/Sections/Section';
import Content from './components/Sections/Content';
import Text from './components/Sections/Text';
import Hightlight from './components/Sections/Hightlight';

import Icon from '@mdi/react'
import {mdiClock, mdiLinkVariant, mdiMapMarker, mdiPhone} from '@mdi/js'

import {
  ScrollingProvider,
} from 'react-scroll-section';
import Footer from './components/Footer';

function App() {
  return (
    <ScrollingProvider offset={-54}>
      <div className="App">
        <Header/>
        <Intro/>

        <Section id='about' title='О нас' subtitle='Информация о нас'>
            <Content side='center'>
                <Text title='Развитие'>
                    Тут текст
                    das<br/>
                    das<br/>
                    das<br/>
                </Text>
                <Text title='Развитие'>
                    Тут текст
                    das<br/>
                    das<br/>
                    das<br/>
                </Text>
                <Text title='Развитие'>
                    Тут текст
                    das<br/>
                    das<br/>
                    das<br/>
                </Text>
                <Text title='Развитие'>
                    Тут текст
                    das<br/>
                    das<br/>
                    das<br/>
                </Text>

            </Content>
        </Section>

        <Section id='why' title='Значимость' subtitle='Почему это стоит сил?'>
            <Content side='center'>
                <Text>
                  Бездомные животные, бесконтрольно проживающие на улицах городов, всегда были привычным явлением, но за последнее время их число увеличилось. Многие исследователи утверждают, что виной тому проявление халатности при уходе и содержании животного, жестокость человека по отношению к братьям нашим меньшим. Мы не призываем, мы просим Вас помочь нуждающимся.
                </Text>
            </Content>
        </Section>

        <Section id='contacts' title='Контакты' subtitle='Свяжитесь с нами!'>
            <Content side='center'>
                <Text title='Сайт приюта'>
                  <a href='http://getsuperdog.ru'>
                    <Icon path={mdiLinkVariant}
                      title=''
                      size={'16px'}
                      color='#9c88ff'
                    /> getsuperdog.ru
                  </a>
                </Text>
                <Text title='Адресс приюта'>
                  <Icon path={mdiMapMarker}
                    title=''
                    size={'16px'}
                    color='#9c88ff'
                  /> Московская область, г.Химки (недалеко от ОБИ/МЕГА/АШАН)
                </Text>
                <Text title='Часы работы'>
                  <Icon path={mdiClock}
                    title=''
                    size={'16px'}
                    color='#9c88ff'
                  /> вт-вск: 10:00-17:00,<br/>понедельник - выходной
                </Text>
                <Text title='Номер телефона'>
                  <Icon path={mdiPhone}
                    title=''
                    size={'16px'}
                    color='#9c88ff'
                  /> 8 (915) 203-8085, Лена
                </Text>
            </Content>
        </Section>

        <Footer/>
      </div>
    </ScrollingProvider>
  );
}

export default App;
