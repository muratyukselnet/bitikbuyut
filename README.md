# Logoyu Bir Tık Büyütebilir Miyiz ?

Artık logoyu bir tık büyütmek çok kolay. Her web müşterisinin olmazsa olmaz isteklerinden logo büyütmek bu JQuery plugini ile artık hiç sorun değil.

## Bir Tık Kaç Pixel

Plugine vereceğiniz optionlar ile kaç tık büyüteceğiniz ve bir tıkın pixel karşılığını belirleyebiliyorsunuz. Default olarak 1 tık 10 pixel alınmaktadır.

## Kurulum

Js dosyasını ekle, (JQuery olmazsa olmaz zaten, şunu browserlara entegre etseler ya direk kullanabilsek)

        <script src="bitikbuyut.js"></script>

İlgili elementlara uygula:

        $('.bitikbuyut').bitikbuyut();

Default değerlerle oynamak isterseniz:

        $('.bitikbuyut').bitikbuyut({ tikvspx: 20, kactik: 2 }); // 40 eder

