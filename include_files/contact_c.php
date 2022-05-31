<?php
$url =$_SERVER['PHP_SELF'];
?>
<div class="footer-top footer-different">
    <div class="wrapper">
        <h2 class="title-contact"><span class="title-english font-alata">CONTACT</span><span class="title-japan">お問い合わせ</span></h2>
        <p class="text-contact">人材派遣サービスに関して、<br>気になることがある方は<br class="sm">お気軽にお問い合わせください。</p>
        <ul class="list-inquiry">
            <li class="item-inquiry button-big"><a href="#">資料請求・お問い合わせ</a></li>
            <li class="item-inquiry button-small">
            <p class="text-inquiry-small"><span>人材派遣に関するお役立ち資料を<br class="sm">無料でご活用いただけます</span></p><a href="#">お役立ち資料ダウンロード</a>
            </li>
        </ul>
    </div>
</div>
<div class="content-menu-client">
    <ul class="list-menu-client">
    <li class="item-client <?php echo ($url == '/client/haken/index.html')? 'active-hover':''; ?>"><a href="../../client/haken/index.html">人材派遣サービスTOP</a></li>
    <li class="item-client <?php echo ($url == '/client/haken/field.html')? 'active-hover':''; ?>"><a href="../../client/haken/field.html">得意とする領域・職種</a></li>
    <li class="item-client <?php echo ($url == '/client/haken/interview/index.html')? 'active-hover':''; ?>"><a href="../../client/haken/interview/index.html">導入事例インタビュー</a></li>
    <li class="item-client <?php echo ($url == '/client/haken/interview/detail.html')? 'active-hover':''; ?>"><a href="../../client/haken/interview/detail.html">派遣チーム×顧客座談会</a></li>
    <li class="item-client <?php echo ($url == '/client/haken/article/index.html')||($url == '/client/haken/article/detail.html')? 'active-hover':''; ?>"><a href="../../client/haken/article/index.html">記事コンテンツ</a></li>
    </ul>
</div>