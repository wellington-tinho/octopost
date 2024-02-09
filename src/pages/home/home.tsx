import { ReactNode } from 'react';

import { useModule } from '~contexts/ModuleContext';

import FeedbackError from '~components/FeedbackError/FeedbackError';
import FirstComment from '~components/FirstComment/FirstComment';
import MainComposer from '~components/MainComposer/MainComposer';
import SavBar from '~components/SavBar/SavBar';
import SocialMediaList from '~components/SocialMediaList/SocialMediaList';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

function Home(): ReactNode {
  const { modules } = useModule();

  return (
    <>
      <Header />
      <div className={scss.mainContainer}>
        <div className={scss.gridContainer}>
          <div className={scss.gridSwitches}>
            <Sidebar />
            {modules.map((item) => JSON.stringify(item))}
          </div>
          <div className={scss.gridInput}>
            <SocialMediaList />
            <MainComposer />
            <FirstComment />
            <FeedbackError />
          </div>
        </div>
        <div className={scss.gridSavBar}>
          <SavBar />
        </div>
      </div>
    </>
  );
}

export default Home;
