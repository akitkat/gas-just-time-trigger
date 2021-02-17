const setTrigger = () => {
  const date = new Date()
  ScriptApp.newTrigger('main')
    .timeBased()
    .at(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 10, 0, 0))
    .create()
}

const main = () => {
  console.log('Hello World!')

  // 指定日時実行のトリガーは、終了後、無効なトリガーとして残り続けるので削除しておく.
  const triggers = ScriptApp.getProjectTriggers()
  for (let i in triggers) {
    if ('main' == triggers[i].getHandlerFunction()) {
      ScriptApp.deleteTrigger(triggers[i])
    }
  }
}