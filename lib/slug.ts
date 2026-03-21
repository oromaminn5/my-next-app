export function generateSlug(title: string): string {
  return (
    title
      .toLowerCase()
      // 日本語をローマ字に変換するマッピング
      .replace(/東京/g, "tokyo")
      .replace(/大阪/g, "osaka")
      .replace(/京都/g, "kyoto")
      .replace(/阪神/g, "hanshin")
      .replace(/中京/g, "chukyo")
      .replace(/札幌/g, "sapporo")
      .replace(/函館/g, "hakodate")
      .replace(/福島/g, "fukushima")
      .replace(/新潟/g, "niigata")
      .replace(/中山/g, "nakayama")
      .replace(/小倉/g, "kokura")
      // レース名
      .replace(/日本ダービー/g, "japan-derby")
      .replace(/天皇賞/g, "tenno-sho")
      .replace(/有馬記念/g, "arima-kinen")
      .replace(/宝塚記念/g, "takarazuka-kinen")
      .replace(/桜花賞/g, "oka-sho")
      .replace(/オークス/g, "oaks")
      .replace(/菊花賞/g, "kikuka-sho")
      .replace(/皐月賞/g, "satsuki-sho")
      .replace(/高松宮記念/g, "takamatsu-miya-kinen")
      .replace(/スプリンターズs/g, "sprinters-s")
      .replace(/マイルcs/g, "mile-cs")
      .replace(/ジャパンカップ/g, "japan-cup")
      .replace(/大阪杯/g, "osaka-hai")
      .replace(/NHKマイルカップ/g, "nhk-mile-cup")
      .replace(/ヴィクトリアマイル/g, "victoria-mile")
      // 汎用変換
      .replace(/予想/g, "yoso")
      .replace(/回顧/g, "kaiko")
      .replace(/展望/g, "tenbo")
      .replace(/結果/g, "kekka")
      .replace(/[0-9０-９]/g, (s) =>
        String.fromCharCode(s.charCodeAt(0) - 0xfee0),
      )
      // 記号・スペースをハイフンに
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
  );
}
