const { Bench } = require('tinybench');
const { foo, bar } = require('../index')

async function main () {
  const bench = new Bench({ time: 100 });

  bench
    .add('foo([1, 2, 3, 4], false)', () => {
      foo([1, 2, 3, 4], false)
    })
    .add('foo([1, 2, 3, 4], true)', async () => {
      foo([1, 2, 3, 4], true)
    })
    .add('bar([1, 2, 3, 4], false)', () => {
      bar([1, 2, 3, 4], false)
    })
    .add('bar([1, 2, 3, 4], true)', async () => {
      bar([1, 2, 3, 4], true)
    })
  await bench.warmup();
  await bench.run();
  console.table(bench.table());
}

describe('main', () => {
  it('test', function () {
    main()
  })
})
