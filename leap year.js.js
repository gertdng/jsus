var a=prompt('leap year')

function isleap(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
if (isleap(a) ===true){alert('đây là năm nhuận')}
if (isleap(a)===false){alert('đây ko phải là năm nhuận')}
