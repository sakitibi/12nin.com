window.onload = function(){
　var c = 2; //ランダムに表示するiframe内URLの数
　var ifm = document.getElementById('12ninadmanager');
　var r = Math.floor(Math.random()*c);
　var urls = new Array();
　urls[0] = 'https://sin.creativecdn.com/imp-delivery?tk=MpFvCkohMur4sN-gR7jJg5YHgLMwPpOOJtzU10lbi09qkYbF6jQv-pX_OjhujmetdkzLOa8pV2KrftZjX7K_-u6e56cn7N-LfviDDVTrAqpy4DViLqRqlNiVrXtzGgN0IdXsneybht0gSR4dgN8EHNloreEclH1OEQTrwZxfmfE8DRdF5SuCocwcEFaCsxZK8vqoD9az2nkgEBsRL5ZqVaaOk5jjXsQQVVLYmMsrzaFYlNiLZM4UySVutBkJRQZuVO-ORxjlWW7cdquC4BnerOcGFpVlzr305ZBflSwoBvUhz5aQuIsxnQh_u1MWjXQTtjiB0Ho281JDKUbvQUG9c-Nn-GEiLxIfq7NyU6IHacjg5TcqyxW9APYkaesi8FnuOdZL7a4Tq_ltCETyH68RaA&curl=https%3A%2F%2Ftg.socdm.com%2Frd%2Fv1%2Fz%2FhKFj2gD_Y2hzbT0yMzgsYzJmMmRmMTcvMTYyMjI2L1NTUExPQy8xMzQ4NjAyLzI5MDQ4Ny4yOTUyMjUuMTM0ODYwMi8yMjc0Mjk2LzE3MzM4Mi8xNjIyMjY6U1NQTE9DOiovY3Q9MTc0Mzk4MTE0MzIyMztzcj1odHRwcztkc3BpZD00MTtwcj15eFZQejVtMFNyOEstTGFPUVFsQ0NSd0w7cHJiPXlRO3Bybz15UTtwcm9jPUpQWTtjcmQyeT0xNDkuNTIwMDAwMDAwMDAwMDE7Y3J5MmQ9MC4wMDY2ODgwNjg0ODU4MjEyOTM5O2RzcGlkPTQxO2Z0eXBlPTE7aWR4PTA7pXNlcWlk2gAkMTk3NDJhYzgtOTA4ZC1hYzBiLWIzNzgtOTE1MDMxMjI0MDE0p3NlcXRpbWWtMTc0Mzk4MTE0MzIyM6R4dWlkuFoxWVJhOENvOFlBQUFHNlFCdzRBQUFBQQ%2Fp%2Fctsv%3Da-ad40305%3Bseqid%3D19742ac8-908d-ac0b-b378-915031224014%3Bseqctx%3Dgat3by5hZy5mdHlwZaEx%3B%2Fg%2FU%3A%3Furl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250406_z0ja2e9GoKnNISvBECcN%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin';
  urls[1] = 'https://ads.as.criteo.com/delivery/r/afr.php?u=%7CebRtXdla6rqV7jKlguVBj04zki0jfcjudUaBXaMWmYY%3D%7C&c1=Dcz_gsP0hEuJH1VnunqGy1Gv4jg2UtNuZh6rIexvwbPdnT_XaVBcsU03qj3WbcJ2oD-MMQfu1V5kn3g-XtdDbI_A-puzn0zM8ZoG_WJz8XoJKcL1yycTOFlXOPIP7BQRnVP9UnsUfdUzX4JEsP9Q08VbHA8PwlQzoXlTzcTKgi1UmOVlYjv_xi0Kzztef-cFNUGFW0NyiXPw8PAh6v8pZd9_YnNjoFI-eFzGZbfadKZhghadHctbEPILc7xIm29SNAmDmqnVbMCcfpyvsfBbfUeHntFdPI5F6rUMnAQ1OFpvx8i6kMKojfNTN6k86C8QbL3ZXGaGA5eDW5bQAKx8WNQtG9SuvFdZTjqobKcMky_me_oFNHw-dvQc_FIvmB2ybbv_V1EMvTPh9dKaMmbPyqFmdXXDHpRK7k8Q7ifrrqE57Hg_AdtDeNKOOQ01DlOqBfYiFtDDhDtS6MD7CHIl7eO6A6jNG1dqf0UW7SDOrzx0N6G8_C6pLtkMT3CIiO2r_sJfTgU8BZ659e3Ifre5NYjGRtG7M7rEDVHU96st_dAa93MR_dSrrHszKg6WbQMYYFhCUtRF9R1puk1yr5xd4D5Y9dXhYF9uGmJ8u1O9AYopERtLC-mE99W3ZHcjYsZ8o8YJv3k9FANOQLtp9iZnP5rUopxk6KSmd_GXuTXaJg2HZXKj7-uCzw1JSXbftVzDkf1hD5y03ofI0d1MA5yYdw';
　ifm.src = urls[r];
}
