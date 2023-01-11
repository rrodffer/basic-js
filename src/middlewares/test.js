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

async function RestOperator(req, res, next) {
  try {
    const user = {
      firstName: 'Rayron',
      lastName: 'Rodffer',
      birthDate: '27/11/1996'
    };

    // Rest operator
    const { birthDate, ...rest } = user;

    console.log('Rest Operator:', rest);

    const array = [1, 2, 3, 4, 5, 6, 7];

    const [first, second, ...restArray] = array;

    console.log('Rest Operator Array:', restArray);

    const [firstItem, , thirdItem, ...skipItem] = array;

    console.log('Rest Operator Skip Item:', skipItem);


    return res.status(200).json({ 'objeto': rest, 'lista': restArray, 'pulaItem': { firstItem, thirdItem, skipItem } });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Não foi possível cadastrar o usuário' });
  }
};

async function ShortSyntax(req, res, next) {
  try {
    // Short Syntax

    const name = 'Rayron';
    const age = 26;

    const user = {
      name,
      age
    }


    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Não foi possível cadastrar o usuário' });
  }
};

async function OptionalChaining(req, res, next) {
  try {
    // Optional Chaining

    const user = {
      name: 'Johnny',
      age: 33,
      address: {
        street: 'Rua ABC',
        number: 222,
        zip: {
          code: '999999'
        },
        // showAddress() {
        //   return 'Endereço'
        // }
      }
    }



    console.log('CEP: ', user.address?.zip?.code ?? 'Não informado');
    console.log('CHAMA FUNÇÃO: ', user.address?.showAddress?.());
    console.log('Usando key: ', user.address['city']);

    return res.status(200).json({ 'CEP': user.address?.zip?.code ?? 'Não informado' });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

module.exports = {
  NullishCoalescingOperator,
  Objects,
  basicGet,
  RestOperator,
  ShortSyntax,
  OptionalChaining
}
