##Tic Tac Toe
- Static olarak oluşturulmuş 9 adet hücremiz var
- Oyun başlangıcında startGame fonksiyonu, oluşturulan static hücrelerin tıklanma olayını aktif ediyor
- Tıklanma olayı ile hangi hücreye tıklandığı tespit edilerek "X" veya "O" yazılması sağlandıktan sonra sıranın diğer oyuncuya verilmesi sağlanıyor
- winControl fonksiyonları ile satır, sütun yada köşenğenlerde kazanan olup olmadığı her hamleden sonra kontrol ediliyor
- tieControl fonksiyonu ile bütün hücreler dolu ve kazanan yoksa beraberlik kontrolü yapılıyor
- newGameStart fonksiyonu, beraberlik veya herhangi bir tarafın kazanması sonrası oyun yeniden başlatılmak istendiğinde ayarları sıfırlayarak baştan başlanmasını sağlıyor
