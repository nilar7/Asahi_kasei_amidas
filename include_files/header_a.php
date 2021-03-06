<?php
$url =$_SERVER['PHP_SELF'];
?>
<div class="inner-wrapper">
    <div class="header-left">
        <div class="header-logo"><a class="trans logo" href="/"><img src="/img/common/common_logo.png" width="189" height="57" loading="lazy" alt="旭化成アミダス"></a></div>
        <p class="text-service">総合人材<br class="md">サービスサイト</p>
    </div>
    <div class="header-right md">
        <div class="content-top">
            <ul class="list-function s-top">
                <li class="item-list background-orange"><a class="item-link" href="/mypage/register.html">派遣登録はこちら</a></li>
                <li class="item-list background-orange"><a class="item-link" href="/mypage/search.html">派遣のお仕事検索</a></li>
                <li class="item-list background-blue"><a class="item-link" href="/mypage/">マイページログイン</a></li>
            </ul>
            <ul class="list-function no-top">
                <li class="item-list background-blue"><a class="item-link" href="/mypage/">マイページログイン</a></li>
                <li class="item-list background-blue"><a class="item-link" href="/mypage/register.html">派遣登録はこちら</a></li>
            </ul>
            <form class="form-search">
                <div class="content-form">
                    <input class="input-text" type="text" name="search" value="" placeholder="サイト内検索">
                    <div class="item-search background-blue"><a href="javascript:void(0);"></a></div>
                </div>
            </form>
        </div>
        <div class="content-bottom">
            <nav class="header-navigation">
                <ul class="list-navigation">
                    <li class="item-navigation"><a href="/" class="<?php echo ($url == '/index.html') ? 'active-menu':''; ?>">ホーム</a></li>
                    <li class="item-navigation menu02"><a href="javascript:void(0)" class="<?php echo ($url == '/job/index.html') || ($url == '/job/haken/index.html')|| ($url == '/job/jinzai/about.html')|| ($url == '/job/seisan/about.html')|| ($url == '/job/haken/faq.html')|| ($url == '/job/haken/lifestyle.html') || ($url == '/job/haken/interview/index.html') || ($url == '/job/haken/interview/detail.html') || ($url == '/mypage/search.html') || ($url == '/mypage/job-list.html') || ($url == '/mypage/job-detail.html') || ($url == '/mypage/register.html') || ($url == '/mypage/register-confirm.html') || ($url == '/mypage/register-complete.html') ? 'active-menu':''; ?>">お仕事をお探しの方</a></li>
                    <li class="item-navigation menu03"><a href="javascript:void(0)">企業のご担当者の方</a></li>
                    <li class="item-navigation menu04"><a href="javascript:void(0)" class="<?php echo ($url == '/recruit/index.html')|| ($url == '/recruit/engineer/index.html') ? 'active-menu':''; ?>">採用情報</a></li>
                    <li class="item-navigation"><a href="/company/" class="<?php echo ($url == '/company/index.html') || ($url == '/company/map/index.html') ||  ($url == '/company/map/tokyo.html') ? 'active-menu':''; ?>">企業情報</a></li>
                    <li class="item-navigation"><a href="#">アクセス</a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>
<div class="drop_down_menu drop_down_menu02 md">
    <ul class="drop_down_menu_inner">
        <li class="drop_down_menu_item current_menu">
            <a href="/job/index.html">お仕事をお探しの方</a>
        </li>
        <li class="drop_down_menu_item">
            <a href="/job/index.html">旭化成アミダスでできる<br>仕事の探し方</a>
            <a href="/job/haken/index.html">人材派遣</a>
            <a href="">転職支援</a>
        </li>
        <li class="drop_down_menu_item">
            <a href="">製造現場のお仕事</a>
            <a href="">受付業務のお仕事</a>
        </li>
    </ul>
</div>
<div class="drop_down_menu drop_down_menu03 md">
    <ul class="drop_down_menu_inner">
        <li class="drop_down_menu_item current_menu">
            <a href="/client/index.html">企業のご担当者の方</a>
        </li>
        <li class="drop_down_menu_item">
            <a href="/client/news/index.html">お知らせ・イベント情報</a>
            <a href="/client/service.html">旭化成アミダスができること</a>
            <a href="/client/haken/">旭化成アミダスの人材派遣<br>サービス</a>
            <a href="">旭化成アミダスの<br>ITエンジニア派遣サービス</a>
        </li>
        <li class="drop_down_menu_item">
            <a href="">旭化成アミダスの<br>人材紹介サービス</a>
            <a href="">旭化成アミダスの<br>教育研修サービス</a>
            <a href="">旭化成アミダスの各種<br>アウトソーシングサービス</a>
            <a href="">旭化成アミダスのISO事業</a>
        </li>
    </ul>
</div>
<div class="drop_down_menu drop_down_menu04 md">
    <ul class="drop_down_menu_inner">
        <li class="drop_down_menu_item current_menu">
            <a href="/recruit/index.html">採用情報</a>
        </li>
        <li class="drop_down_menu_item">
            <a href="">旭化成アミダスとは</a>
            <a href="">教育研修制度</a>
            <a href="">福利厚生制度</a>
        </li>
        <li class="drop_down_menu_item">
            <a href="">採用に関するお問い合わせ</a>
            <a href="/recruit/engineer/index.html">新卒採用（ITエンジニア）</a>
            <a href="">新卒採用（総合職）</a>
            <a href="">中途採用</a>
        </li>
    </ul>
</div>
<nav class="menu-navigation js-navigation">
    <div class="navigation-block">
        <ul class="header-menu">
            <li class="item-menu">
                <div class="title-menu js-accordion"><a class="trans js-accordion-heading" href="/">ホーム</a></div>
                <ul class="sub-menu js-accordion-content md">
                    <li class="item-sub-menu"><a class="trans" href="/topics/index.html">お知らせ</a></li>
                    <li class="item-sub-menu"><a class="trans" href="#">お問い合わせ</a></li>
                </ul>
                <div class="block-menu md">
                    <div class="title-menu"><a class="trans" href="/company/index.html">企業情報</a></div>
                    <ul class="sub-menu">
                        <li class="item-sub-menu"><a class="trans" href="#">コーポレートスローガン</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">代表あいさつ</a></li>
                        <li class="item-sub-menu"><a class="trans" href="/company/">会社概要／<br>旭化成グループについて</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">沿革</a></li>
                        <li class="item-sub-menu"><a class="trans" href="/company/map/index.html">拠点一覧</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">労働者派遣事業に係る<br>各種情報のお知らせ</a></li>
                    </ul>
                </div>
            </li>
            <li class="item-menu js-accordion">
                <div class="title-menu icon-plus-big md"><a class="trans js-accordion-heading" href="/job/index.html">お仕事をお探しの方</a></div>
                <div class="title-menu icon-plus-big js-accordion-heading sm"><span class="trans js-accordion-heading">お仕事をお探しの方</span></div>
                <div class="content-sub-menu js-accordion-content">
                    <ul class="sub-menu">
                        <li class="item-sub-menu"><a class="trans" href="/job/index.html">旭化成アミダスでできる<br class="md">仕事の探し方</a></li>
                        <li class="item-sub-menu sm"><a class="trans" href="/job/haken/index.html">人材派遣</a></li>
                        <li class="item-sub-menu sm"><a class="trans" href="#">転職支援</a></li>
                        <li class="item-sub-menu sm"><a class="trans" href="#">製造現場のお仕事</a></li>
                        <li class="item-sub-menu sm"><a class="trans" href="#">受付業務のお仕事</a></li>
                        <li class="item-sub-menu js-accordion md"><span class="trans icon-plus js-accordion-heading">人材派遣</span>
                            <div class="content-last-menu js-accordion-content">
                                <ul class="list-last-menu">
                                    <li class="item-sub-menu"><a class="trans" href="/job/haken/index.html">人材派遣トップ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/mypage/search.html">派遣求人検索</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/mypage/register.html#">WEB仮登録</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/mypage/index.html">マイページ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/job/haken/lifestyle.html">ライフスタイル別特集</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">拠点別特集</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">業界・職種別特集</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/job/haken/interview/index.html">スタッフインタビュー</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/job/haken/faq.html">よくあるご質問</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">初めて派遣で働く方へ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">ご登録済み派遣スタッフの方</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">労働者派遣法改正関連</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="item-sub-menu md"><span class="trans icon-plus js-accordion-heading">転職支援</span>
                            <div class="content-last-menu js-accordion-content">
                                <ul class="list-last-menu">
                                    <li class="item-sub-menu"><a class="trans" href="/job/jinzai/">転職支援トップ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">求人検索</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/job/jinzai/about.html">旭化成アミダスの転職支援<br>サ ービスについて</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">旭化成グループの会社<br>だからできる転職支援</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">旭化成アミダスの<br>得意な領域・職種</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">お仕事が決まるまでの流れ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">転職コンサルタント紹介</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">コンサルタント×転職者 対談</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">よくあるご質問</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="item-sub-menu md"><span class="trans icon-plus js-accordion-heading">製造現場のお仕事</span>
                            <div class="content-last-menu js-accordion-content">
                                <ul class="list-last-menu">
                                    <li class="item-sub-menu"><a class="trans" href="/job/seisan/">製造現場のお仕事トップ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/job/seisan/about.html">製造現場のお仕事について</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">配属地域紹介<br>（守山、日向、袖ヶ浦）</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">社員インタビュー</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">研修制度</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">よくあるご質問</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">募集中案件</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="item-sub-menu md"><span class="trans icon-plus js-accordion-heading">受付業務のお仕事</span>
                            <div class="content-last-menu js-accordion-content">
                                <ul class="list-last-menu">
                                    <li class="item-sub-menu"><a class="trans" href="#">受付業務のお仕事トップ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">旭化成アミダスの受付業務<br>について</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">社員インタビュー</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">研修制度</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">よくあるご質問</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">募集業務</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="item-menu js-accordion">
                <div class="title-menu icon-plus-big md"><a class="trans js-accordion-heading" href="/client/index.html">企業のご担当者の方</a></div>
                <div class="title-menu icon-plus-big js-accordion-heading sm"><span class="trans js-accordion-heading">企業のご担当者の方</span></div>
                <div class="content-sub-menu js-accordion-content">
                    <ul class="sub-menu md">
                        <li class="item-sub-menu"><a class="trans" href="/client/news/index.html">お知らせ・イベント情報</a></li>
                        <li class="item-sub-menu"><a class="trans" href="/client/service.html">旭化成アミダスができること</a></li>
                        <li class="item-sub-menu"><span class="trans icon-plus js-accordion-heading">旭化成アミダスの人材派遣<br>サービス</span>
                            <div class="content-last-menu js-accordion-content">
                                <ul class="list-last-menu">
                                    <li class="item-sub-menu"><a class="trans" href="/client/haken/">人材派遣サービストップ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/client/haken/field.html">得意とする領域・職種</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/client/haken/interview/index.html">導入事例インタビュー</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">派遣チーム×顧客座談会</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/client/haken/article/index.html">ブログ・コラム</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">資料請求・お問い合わせ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/client/haken/whitepaper.html">ホワイトペーパー</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="item-sub-menu"><span class="trans icon-plus js-accordion-heading">旭化成アミダスの<br>ITエンジニア派遣サービス</span>
                            <div class="content-last-menu js-accordion-content">
                                <ul class="list-last-menu">
                                    <li class="item-sub-menu"><a class="trans" href="#">ITエンジニア派遣<br>サービストップ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">得意とする領域・職種</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">お問い合わせ</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="item-sub-menu"><span class="trans icon-plus js-accordion-heading">旭化成アミダスの<br>人材紹介サービス</span>
                            <div class="content-last-menu js-accordion-content">
                                <ul class="list-last-menu">
                                    <li class="item-sub-menu"><a class="trans" href="#">人材紹介サービストップ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">得意とする領域・職種</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">導入事例インタビュー</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">記事コンテンツ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">資料請求・お問い合わせ</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="item-sub-menu"><span class="trans icon-plus js-accordion-heading">旭化成アミダスの<br>教育研修サービス</span>
                            <div class="content-last-menu js-accordion-content">
                                <ul class="list-last-menu">
                                    <li class="item-sub-menu"><a class="trans" href="#">教育研修サービストップ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="/client/program/index.html">教育研修一覧・<br>課題別研修検索</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">資料請求・お問い合わせ</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="item-sub-menu"><span class="trans icon-plus js-accordion-heading">旭化成アミダスの各種<br>アウトソーシングサービス</span>
                            <div class="content-last-menu js-accordion-content">
                                <ul class="list-last-menu">
                                    <li class="item-sub-menu"><a class="trans" href="#">アウトソーシング<br>サービストップ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">導入事例インタビュー</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">資料請求・お問い合わせ</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="item-sub-menu"><span class="trans icon-plus js-accordion-heading">旭化成アミダスのISO事業</span>
                            <div class="content-last-menu js-accordion-content">
                                <ul class="list-last-menu">
                                    <li class="item-sub-menu"><a class="trans" href="#">ISO事業トップ</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">ISO審査／ISO研修</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">資料請求・お問い合わせ</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul class="sub-menu sm">
                        <li class="item-sub-menu"><a class="trans" href="/client/index.html">企業のご担当者の方トップ</a></li>
                        <li class="item-sub-menu"><a class="trans" href="/client/news/index.html">お知らせ・イベント情報</a></li>
                        <li class="item-sub-menu"><a class="trans" href="/client/service.html">旭化成アミダスができること</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">旭化成アミダスの人材派遣サービス</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">旭化成アミダスのITエンジニア派遣サービス</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">旭化成アミダスの人材紹介サービス</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">旭化成アミダスの教育研修サービス</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">旭化成アミダスの<br>各種アウトソーシングサービス</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">旭化成アミダスのISO事業</a></li>
                    </ul>
                </div>
            </li>
            <li class="item-menu js-accordion">
                <div class="title-menu icon-plus-big md"><a class="trans js-accordion-heading" href="/recruit/index.html">採用情報</a></div>
                <div class="title-menu icon-plus-big js-accordion-heading sm"><span class="trans js-accordion-heading">採用情報</span></div>
                <div class="content-sub-menu js-accordion-content">
                    <ul class="sub-menu md">
                        <li class="item-sub-menu"><a class="trans" href="#">旭化成アミダスとは</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">教育研修制度</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">福利厚生制度</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">採用に関するお問い合わせ</a></li>
                        <li class="item-sub-menu"><span class="trans icon-plus js-accordion-heading">新卒採用（ITエンジニア）</span>
                            <div class="content-last-menu js-accordion-content">
                                <ul class="list-last-menu">
                                    <li class="item-sub-menu"><a class="trans" href="#">仕事を知る</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">事業の未来座談会</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">社員紹介</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">よくあるご質問</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">専門研修制度</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">採用情報</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">エントリー</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="item-sub-menu"><span class="trans icon-plus js-accordion-heading">新卒採用（総合職）</span>
                            <div class="content-last-menu js-accordion-content">
                                <ul class="list-last-menu">
                                    <li class="item-sub-menu"><a class="trans" href="#">採用情報</a></li>
                                    <li class="item-sub-menu"><a class="trans" href="#">エントリー</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="item-sub-menu"><a class="trans" href="#">中途採用</a></li>
                    </ul>
                    <ul class="sub-menu sm">
                        <li class="item-sub-menu"><a class="trans" href="/recruit/">採用情報トップ</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">旭化成アミダスとは</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">事業の未来座談会</a></li> 
                        <li class="item-sub-menu"><a class="trans" href="#">教育研修制度</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">福利厚生制度</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">採用に関するお問い合わせ</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">新卒採用（ITエンジニア）</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">新卒採用（総合職）</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">中途採用</a></li>
                    </ul>
                </div>
            </li>
            <li class="item-menu sm js-accordion">
                <div class="title-menu icon-plus-big js-accordion-heading"><span class="trans">企業情報</span></div>
                <div class="content-sub-menu js-accordion-content">
                    <ul class="sub-menu">
                        <li class="item-sub-menu"><a class="trans" href="/company/">企業情報トップ</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">コーポレートスローガン</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">代表あいさつ</a></li>
                        <li class="item-sub-menu sm"><a class="trans" href="#">事業紹介</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">会社概要／<br class="md">旭化成グループについて</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">沿革</a></li>
                        <li class="item-sub-menu"><a class="trans" href="/company/map/index.html">拠点一覧</a></li>
                        <li class="item-sub-menu"><a class="trans" href="#">労働者派遣事業に係る<br>各種情報のお知らせ</a></li>
                    </ul>
                </div>
            </li>
            <li class="item-menu sm">
                <div class="title-menu"><a class="trans" href="#">アクセス</a></div>
            </li>
        </ul>
        <ul class="list-notice sm">
            <li class="item-notice"><a class="trans" href="#">お知らせ</a></li>
            <li class="item-notice"><a class="trans" href="#">お問い合わせ</a></li>
        </ul>
        <form class="form-search sm">
            <input class="input-search" type="search" name="search" placeholder="サイト内検索">
            <button class="icon-search" type="submit"></button>
        </form>
    </div>
</nav>
<div class="button-menu trans js-button-menu"><span></span><span></span><span></span></div>