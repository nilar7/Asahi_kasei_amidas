const pages = [
  { pageName: '/index.html', pageID: 'top' },
  { pageName: '/topics/index.html', pageID: 'topics' },
  { pageName: '/topics/detail.html', pageID: 'topics' },
  { pageName: '/company/index.html', pageID: 'company' },
  { pageName: '/company/map/index.html', pageID: 'company' },
  { pageName: '/company/map/tokyo.html', pageID: 'company' },
  { pageName: '/job/index.html', pageID: 'job' },
  { pageName: '/job/haken/index.html', pageID: 'job' },
  { pageName: '/job/haken/lifestyle.html', pageID: 'job' },
  { pageName: '/job/haken/interview/index.html', pageID: 'job' },
  { pageName: '/job/haken/interview/detail.html', pageID: 'job' },
  { pageName: '/job/haken/faq.html', pageID: 'job' },
  { pageName: '/job/jinzai/about.html', pageID: 'job' },
  { pageName: '/job/seisan/about.html', pageID: 'job' },
  { pageName: '/recruit/index.html', pageID: 'recruit' },
  { pageName: '/recruit/engineer/index.html', pageID: 'recruit' },
  { pageName: '/mypage/search.html', pageID: 'mypage' },
  { pageName: '/mypage/job-list.html', pageID: 'mypage' },
  { pageName: '/mypage/job-detail.html', pageID: 'mypage' },
  { pageName: '/mypage/register.html', pageID: 'mypage' },
  { pageName: '/client/index.html', pageID: 'client' },
  { pageName: '/client/news/index.html', pageID: 'client' },
  { pageName: '/client/news/detail.html', pageID: 'client' },
  { pageName: '/client/service.html', pageID: 'client' },
  { pageName: '/client/haken/', pageID: 'client' },
  { pageName: '/client/haken/field.html', pageID: 'client' },
  { pageName: '/client/haken/interview/index.html', pageID: 'client' },
  { pageName: '/client/haken/interview/detail.html', pageID: 'client' },
  { pageName: '/client/haken/article/index.html', pageID: 'client' },
  { pageName: '/client/haken/article/detail.html', pageID: 'client' },
  { pageName: '/client/haken/whitepaper.html', pageID: 'client' },
  { pageName: '/client/program/index.html', pageID: 'client' },
  { pageName: '/client/program/active-bsr.html', pageID: 'client' },
  { pageName: '/mypage/index.html', pageID: 'mypage' },
  { pageName: '/mypage/application.html', pageID: 'mypage' }

];
const titleMeta = [
  '総合トップページ',
  'お知らせ一覧',
  'お知らせ詳細',
  '企業情報',
  '拠点一覧',
  '本社',
  '旭化成アミダスで出来る仕事の探し方',
  '人材派遣TOP',
  'ライフスタイル別特集',
  'スタッフインタビュー',
  'インタビュー詳細',
  'よくあるご質問',
  '旭化成アミダスの転職支援サービスについて',
  '製造現場のお仕事について',
  '採用TOP',
  '新卒採用サイト（ITエンジニア）',
  '派遣求人検索',
  '派遣求人検索（結果表示ページ）',
  '求人詳細（案件）',
  '仮登録フォーム',
  '企業担当者の方（法人向けTOP）',
  'お知らせ・イベント情報一覧',
  'お知らせ・イベント情報詳細',
  '旭化成アミダスができること',
  '旭化成アミダスの人材派遣サービス',
  '人材派遣サービス得意とする領域・職種',
  '人材派遣サービス導入事例インタビュー',
  '人材派遣サービスインタビュー詳細',
  '人材派遣サービス記事コンテンツ一覧',
  '人材派遣サービス記事コンテンツ詳細',
  'ホワイトペーパーダウンロード',
  '教育研修一覧-課題別研修検索',
  'ビジネス・シミュレーション・ラリー（BSR）',
  'ログイン | マイページ',
  '登録情報の変更 STEP1(ご住所や職歴など) | マイページ',

];
const description = [
];
const keywords = [];

const fs = require('fs');
const link = '.';

module.exports = function (grunt) {

  grunt.registerTask('files', 'Auto create pug and sass files.', function () {
    const done = this.async();

    async function createFiles() {
      try {
        await Promise.all(
          pages.map(async (item, index) => {
            let page = item.pageName;
            let pageID = '';
            if (item.pageID) pageID = item.pageID;
            // Create folder
            if (!fs.existsSync(`${link}/pug` + page) && page !== '/') {
              let index = page.lastIndexOf('/');
              tempPage = page.slice(0, index + 1);
              await fs.mkdirSync(`${link}/pug` + tempPage, { recursive: true });
            }
            // Page
            const regex = /.html/gi;
            page = page.replace(regex, '.pug');
            if (page.slice(-1) === '/') {
              page += 'index.pug';
            }

            // Get pageID
            let clonePage = page;
            clonePage = clonePage.split('');
            let slashIndex = clonePage
              .map((item, index) => (item === '/' ? index : undefined))
              .filter((x) => x);
            slashIndex.unshift(0);
            slashIndex.splice(0, slashIndex.length - 2);
            if (pageID === '') {
              if (page === '/index.pug') pageID = 'top';
              else if (page.endsWith('index.pug') && slashIndex.length > 1)
                pageID = page.slice(slashIndex[0] + 1, slashIndex[1]);
              else {
                slashLastIndex = page.lastIndexOf('/');
                pugLastIndex = page.lastIndexOf('.pug');
                pageID = page.slice(slashLastIndex + 1, pugLastIndex);
              }
            }

            // Get path
            const numberIndex = page.split('/').length - 1;
            switch (numberIndex) {
              case 1:
                path = '.';
                break;
              case 2:
                path = '..';
                break;
              case 3:
                path = '../..';
                break;
              case 4:
                path = '../../..';
                break;
              case 5:
                path = '../../../..';
                break;
              case 6:
                path = '../../../../..';
            }
            // Create files
            await fs.writeFileSync(
              `${link}/pug` + page,
              `extends ${path}/_layouts/default

block vars
  -title        = '${titleMeta[index] ? titleMeta[index] : ''}'
  -description  = '${description[index] ? description[index] : ''}'
  -keywords     = '${keywords[index] ? keywords[index] : ''}'
  -pageID       = '${pageID}'
  -path         = '${path}'
  -imgPC        = path+'/img/'+pageID+'/'
  -imgSP        = path+'/img/'+pageID+'/sp/'

block container`
        );

        await fs.writeFileSync(
          `${link}/sass/${pageID}.sass`,
          `@charset "utf-8"

@import "base/variables"
@import "base/mixins"
@import "base/base"

@import "parts/header"
@import "parts/footer"

@import "pages/${pageID}"`
            );
            await fs.writeFileSync(
              `${link}/sass/pages/_${pageID}.sass`,
              `@charset "utf-8"
`
            );
          })
        );
        console.log('Create file successfully!');
        console.log(
          { page: pages.length },
          { meta: titleMeta.length },
          { description: description.length },
          { keywords: keywords.length }
        );
        done();
      } catch (e) {
        console.log(e);
      }
    }

    createFiles();

  });

};
