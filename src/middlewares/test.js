const { json } = require("express");

async function testGet(req, res, next) {
  try {
    console.log('Mid de teste.');

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Não foi possível cadastrar o usuário' });
  }
};

module.exports = {
  testGet
}
