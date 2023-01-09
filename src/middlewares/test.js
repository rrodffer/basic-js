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

async function Objects(req, res, next) {
  try {
    const user = {
      name: 'Johnny',
      age: 33,
      address: {
        street: 'Rua ABC',
        number: 222
      }
    }

    if ('name' in user) {
      // retorna true
      console.log('Objeto possui a propriedade condicionada.');

    } else {
      console.log('Objeto não possui a propriedade condicionada.');
    }

    console.log('Retorna todas as chaves do objeto', JSON.stringify(Object.keys(user)));
    console.log('Retorna todas os valores do objeto', JSON.stringify(Object.values(user)));
    console.log('Retorna todas os valores do objeto', JSON.stringify(Object.entries(user)));

    // Desestruturação
    const { address, age: idade } = user;

    // Valor default para variável
    const { city = 'New York' } = user.address;

    console.log('Endereço:', address);
    console.log('Variável renomeada:', idade);
    console.log('Variável com valor padrão:', city);

    return res.status(200).json({
      user,
      'chaves do objeto': Object.keys(user),
      'valores do objeto': Object.values(user),
      'lista com chave e valor': Object.entries(user)
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Não foi possível cadastrar o usuário' });
  }
};

module.exports = {
  NullishCoalescingOperator,
  Objects,
  basicGet
}
