const {it,equal,ios} = require('../test')
const {weeks,diff} = require('../date')

it('should equal 1',()=>equal(weeks(new Date('2019-01-01')),1))
it('should equal 1',()=>equal(weeks(new Date('2019-01-06')),1))
it('should equal 2',()=>equal(weeks(new Date('2019-01-08')),2))
it('should equal 2',()=>equal(weeks(new Date('2019-01-07')),2))
it('should equal 10',()=>equal(weeks(new Date('2019-03-05')),10))
it('should equal 52',()=>equal(weeks(new Date('2018-12-30')),52))
it('should equal 1',()=>equal(weeks(new Date('2018-12-31')),1))

console.log('diff.days')
const tests = [
  [['20190429','20190429'],0],
  [['20190429','20190430'],1],
  [['20190429','20190502'],3],
  [['20190529','20190603'],5], ]
ios(diff.days,tests)
