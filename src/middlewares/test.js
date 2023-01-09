async function basicGet(req, res, next) {
  try {
    console.log('Mid de teste.');

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Não foi possível cadastrar o usuário' });
  }
};

async function NullishCoalescingOperator(req, res, next) {
  try {
    // Nullish Coalescing Operator

    // operador ou, se o primeiro for true se não pega a segunda condição se for true
    // 0, '', [], false, undefined, null => falsy (valores não válidos com operador ou)
    console.log('NullishCoalescingOperator - Sua idade é:', req.body.age || 'Não informado');

    // operador Nullish Coalescing Operator
    // verifica valores não válidos => null, undefined
    console.log('OrOperator - Sua idade é:', req.body.age ?? 'Não informado');

    return res.status(200).json({
      NullishCoalescingOperator: req.body.age ?? 'Idade não informada',
      OrOperator: req.body.age || 'Idade não informada'
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Não foi possível cadastrar o usuário' });
  }
};

module.exports = {
  NullishCoalescingOperator,
  basicGet
}
