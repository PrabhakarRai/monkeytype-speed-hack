// ==UserScript==
// @name         MonkeyType Bot
// @namespace    https://www.theprabhakar.in/
// @version      1.0.0
// @description  Browser counterpart of moneyTypeBot
// @author       Prabhakar Rai
// @match        https://monkeytype.com/
// @icon         https://raw.githubusercontent.com/PrabhakarRai/monkeytype-speed-hack/master/icon.png
// @updateURL    https://raw.githubusercontent.com/PrabhakarRai/monkeytype-speed-hack/master/monkeyBot.user.js
// @downloadURL  https://raw.githubusercontent.com/PrabhakarRai/monkeytype-speed-hack/master/monkeyBot.user.js
// @grant unsafeWindow
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_registerMenuCommand
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_log
// @grant GM_setClipboard
// @grant GM_info
// ==/UserScript==

eval(atob('dmFyIHU9dm9pZCAwLGk0PTQsaTg9OCxyZWM9bmV3IFJlZ0V4cCgiLnsxLDR9IiwiZyIpO2Z1bmN0aW9uIF9mX2Mocyl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocyk7fXZhciBoZD1mdW5jdGlvbihhKXt2YXIgYixjPWEubWF0Y2gocmVjKXx8W10sZD0iIjtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKWQrPWhoKHBhcnNlSW50KGNbYl0saTYpKTtyZXR1cm4gZH07dmFyIGh3PWhkO1N0cmluZy5wcm90b3R5cGUuY2M9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuY2hhckNvZGVBdChhKX07dmFyIGk2PTE2LGhlPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0iIjtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWI9YS5jYyhjKS50b1N0cmluZyhpNiksZCs9KCIwMDAiK2IpLnNsaWNlKC00KTtyZXR1cm4gZH0saGg9ZnVuY3Rpb24oYSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYSl9LGh3YT1odygiMDA0MTAwNDIwMDQzMDA0NDAwNDUwMDQ2MDA0NzAwNDgwMDQ5MDA0YTAwNGIwMDRjMDA0ZDAwNGUwMDRmMDA1MDAwNTEwMDUyMDA1MzAwNTQwMDU1MDA1NjAwNTcwMDU4MDA1OTAwNWEwMDYxMDA2MjAwNjMwMDY0MDA2NTAwNjYwMDY3MDA2ODAwNjkwMDZhMDA2YjAwNmMwMDZkMDA2ZTAwNmYwMDcwMDA3MTAwNzIwMDczMDA3NDAwNzUwMDc2MDA3NzAwNzgwMDc5MDA3YTAwMzAwMDMxMDAzMjAwMzMwMDM0MDAzNTAwMzYwMDM3MDAzODAwMzkwMDJiMDAyZjAwM2QiKTtmdW5jdGlvbiBhdG9iKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9IiIsaj0wO2ZvcihhPWEucmVwbGFjZShyZWEsIiIpO2o8YS5sZW5ndGg7KWU9aHdhLmluZGV4T2YoYS5jaGFyQXQoaisrKSksZj1od2EuaW5kZXhPZihhLmNoYXJBdChqKyspKSxnPWh3YS5pbmRleE9mKGEuY2hhckF0KGorKykpLGg9aHdhLmluZGV4T2YoYS5jaGFyQXQoaisrKSksYj1lPDwyfGY+PjQsYz0oMTUmZik8PDR8Zz4+MixkPSgzJmcpPDw2fGgsaSs9X2ZfYyhiKSw2NCE9ZyYmKGkrPV9mX2MoYykpLDY0IT1oJiYoaSs9X2ZfYyhkKSk7cmV0dXJuIGk9dXRvYShpKX1mdW5jdGlvbiBidG9hKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9IiIsaj0wO2ZvcihhPWF0b3UoYSk7ajxhLmxlbmd0aDspYj1hLmNoYXJDb2RlQXQoaisrKSxjPWEuY2hhckNvZGVBdChqKyspLGQ9YS5jaGFyQ29kZUF0KGorKyksZT1iPj4yLGY9KDMmYik8PDR8Yz4+NCxnPSgxNSZjKTw8MnxkPj42LGg9NjMmZCxpc05hTihjKT9nPWg9NjQ6aXNOYU4oZCkmJihoPTY0KSxpPWkraHdhLmNoYXJBdChlKStod2EuY2hhckF0KGYpK2h3YS5jaGFyQXQoZykraHdhLmNoYXJBdChoKTtyZXR1cm4gaX1mdW5jdGlvbiBhdG91KGEpe2E9YS5yZXBsYWNlKHJlYiwiXG4iKTtmb3IodmFyIGI9IiIsYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hLmNoYXJDb2RlQXQoYyk7MTI4PmQ/Yis9X2ZfYyhkKTpkPjEyNyYmMjA0OD5kPyhiKz1fZl9jKGQ+PjZ8MTkyKSxiKz1fZl9jKDYzJmR8MTI4KSk6KGIrPV9mX2MoZD4+MTJ8MjI0KSxiKz1fZl9jKGQ+PjYmNjN8MTI4KSxiKz1fZl9jKDYzJmR8MTI4KSl9cmV0dXJuIGJ9ZnVuY3Rpb24gdXRvYShhKXtmb3IodmFyIGI9IiIsYz0wLGQ9YzE9YzI9MDtjPGEubGVuZ3RoOylkPWEuY2hhckNvZGVBdChjKSwxMjg+ZD8oYis9X2ZfYyhkKSxjKyspOmQ+MTkxJiYyMjQ+ZD8oYzI9YS5jaGFyQ29kZUF0KGMrMSksYis9X2ZfYygoMzEmZCk8PDZ8NjMmYzIpLGMrPTIpOihjMj1hLmNoYXJDb2RlQXQoYysxKSxjMz1hLmNoYXJDb2RlQXQoYysyKSxiKz1fZl9jKCgxNSZkKTw8MTJ8KDYzJmMyKTw8Nnw2MyZjMyksYys9Myk7cmV0dXJuIGJ9dmFyIGh3YT1odygiMDA0MTAwNDIwMDQzMDA0NDAwNDUwMDQ2MDA0NzAwNDgwMDQ5MDA0YTAwNGIwMDRjMDA0ZDAwNGUwMDRmMDA1MDAwNTEwMDUyMDA1MzAwNTQwMDU1MDA1NjAwNTcwMDU4MDA1OTAwNWEwMDYxMDA2MjAwNjMwMDY0MDA2NTAwNjYwMDY3MDA2ODAwNjkwMDZhMDA2YjAwNmMwMDZkMDA2ZTAwNmYwMDcwMDA3MTAwNzIwMDczMDA3NDAwNzUwMDc2MDA3NzAwNzgwMDc5MDA3YTAwMzAwMDMxMDAzMjAwMzMwMDM0MDAzNTAwMzYwMDM3MDAzODAwMzkwMDJiMDAyZjAwM2QiKSxyZWE9bmV3IFJlZ0V4cCgiW15BLVphLXowLTkrLz1dIiwiZyIpLHJlYj1uZXcgUmVnRXhwKCJcclxuIiwiZyIpO3ZhciBfXz17YTpod2Euc3BsaXQoIiIpLCQ6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9IiIsZD10aGlzLmEubGVuZ3RoLGU9YS5sZW5ndGgsZj0wO2Y8ZTtmKyspZm9yKHZhciBnPTA7ZzxkO2crKylpZigiZSI9PWIpe2lmKHRoaXMuYVtnXT09PWFbZl0pe2MrPXRoaXMuYltnXTticmVha319ZWxzZSBpZigiZCI9PWImJnRoaXMuYltnXT09PWFbZl0pe2MrPXRoaXMuYVtnXTticmVha31yZXR1cm4gY30sYjpodygiMDAzZDAwMmYwMDJiMDAzOTAwMzgwMDM3MDAzNjAwMzUwMDM0MDAzMzAwMzIwMDMxMDAzMDAwN2EwMDc5MDA3ODAwNzcwMDc2MDA3NTAwNzQwMDczMDA3MjAwNzEwMDcwMDA2ZjAwNmUwMDZkMDA2YzAwNmIwMDZhMDA2OTAwNjgwMDY3MDA2NjAwNjUwMDY0MDA2MzAwNjIwMDYxMDA1YTAwNTkwMDU4MDA1NzAwNTYwMDU1MDA1NDAwNTMwMDUyMDA1MTAwNTAwMDRmMDA0ZTAwNGQwMDRjMDA0YjAwNGEwMDQ5MDA0ODAwNDcwMDQ2MDA0NTAwNDQwMDQzMDA0MjAwNDEiKS5zcGxpdCgiIil9Ow=='));
eval(atob(__.$('ja7O47EQi9sKyq8QoNLh05gPz6oPyO7ajqHdj6bRlefM16sXiKnRkefKop4gldLh05gPz6oP154DpN/Iz9gJ0OgXyNUXj53HiKba294J0d=M09MDxuLQop3NnsbSj+fS29wJz+cX1N8V1p/fkZzbuqHM26IYz9kL2ucR0eTQop3NnsbSj+fS29wI0ecX1N0W25/fkZzbuqHM26IYz9gK2ucRz+cVk67OkKr3lZwYlegMy9sX2uEL2efQop3NnsbSj+fS29wJyucX1NoX2J/fkZzbuqHM26IYz9gM2ucRzOYY1p/fkZzbuqHM26IYz9cO2ucRy+cV1p/fkZzbuqHM26IYz9kO2ucRyuTQop3NnsbSj+fS29wHzucX1N8Q2q3Onq7VyJ4Sk5rNm+fO1ZzYmqnM2+cXhqzfj6zY25wXiJ4Sk5rNm+fO1ZzYmqnM2+cXhpMY2tTKop4gmqvblZvXnabbkbzMkabSnNMe4ePUnpzNlKH9lKHMnqHMxu4eyKnLlazMmqDS46bcnqHMmqnHsa7dnrvHk6sY2pTKop4gj9Lh05gPz6oP16sDn6DdjqLblZvlj+gMyt8Xpugek53blqbcr6rNj8LRn6se2uPSxqrlj+gMy9kXprTM29wJy+bj2+4g4ebl07MUkdLb1Zvbi5v9lKHMnqHMqJwYz9kI2rMY4e=e2rUPptTSxtLM29wJzecBmqvblZvXnabbkbzMkabSnNLllePO1+4T4bMSmaDXlegeh+4Xye3JlJ3ckO4DxqIBmqvblZvXnabbkbzMkabSnNLlj+gMzNkX154U4eMeprTM29wH0Obj2+3E4ecGldMDj+gMzN0X3eoYmqvblZvXnabbkbzMkabSnNLlj+gMy90X154U4eMeprTM29wH0Obj2+3E4ecXhqnLlazMmqDS46rIj53foJv0npzNlKIY2pTKop4gj9Lh05gPz6oP16sDn6DdjqLblZwSnKrMvqPblqrSj5z+iszUopzNta7TnufM29wJzOcXyKPbkJzRlczRlZvblZwD4e4FnaDO26Pbj+/Sxt=FldPbqJwYz9gP2rMFleUV2qPbkJzRlczRlZvblZwVxqrllbLlj+gMy9kXpuUe4+3DnZrSoJvXlKIgkKzOmp/MvqHMkZcY2pTNnpvsmqLblJrM2+fajqHdj6bRlegXiJnfke/MxrEQi98Mnd8FmqvblZvXnZbuoqzbr5bQnugX16rIj53foJv0npzNlKIY2uP5trDNnpv9l6bQoaDfkawYmqvblZvXnabbkbzMkabSnOTUnpzNlKH9lKHMnqHM2uPUlKzfl7zMlJ3fnKrlj+gMyt=XpufM29wHz+cUl6rNkKDSwKDSj6rSj+HNjq3Nj53XlakY0+QP0+cXhucU0KsN2uPNnpv3lZvbkZnfl+gYnZrSoJvXlKIY2pTKop4gj9Lh05gPz6oPyKrIj53foJv0npzNlKIY2uQe4e8Dl6rNkKDSwKDSj6rSj+oal6DdoqPtj6DOoqjbqJwYz9gQ2rMYj+gMytwX2u8Dl6rNkKDSwKDSj6rSj7TM29wIyubj29=U0t=X3enNnpvsmqLblJrM2+fajqHdj6bRlegXiJnfke/bxpwFmqvblZvXnZbuoqzbr5bQnugX16rIj53foJv0npzNlKIY2uP5trDNnpv9l6bQoaDfkawYmqvblZvXnabbkbzMkabSnOTUnpzNlKH9lKHMnqHM2uPUlKzfl7zMlJ3fnKrlnugMyt=Xpugek53bjcPbkO4Ul6rNkKDSwKDSj6rSj7Tb29wIyubj29=U0t=X2pMX197b0ObD2uQJnt0XhqnLlazMmqDS47EQi98Mnd8Yj+Pb2pTKop4gldLh05gMy9kN2+cFkarMjp3S27EQi98Mnd8DnZrSoJvXlKIYj+Pb2pTOnpvLkaIglbTM1tMMzN3jhucYj+Pb2pLajqHdj6bRle/h05gMy9kN2+bFja7O45wDqO3JlJ3c4eQekJ/Umpwe1+4KsJr9i8nc4eQenKrMupvblu4U4aPblajMm+4U4d8QzdoPzNb1m6TanqEe1+3PjqDM4eQezN=L09v4vrXdvM8e1+4P0doOy9sLsLnLupjG4eQez8L8t5vRsu4U4Zvbi5v9lKHMnqHM4eQelKHUlK7c4eQekJrekJvOmqHZ4eQekKrMupvblu4U4ajbj8rUnqLblZv+isbc4eQeytnLqcvVjsIe1+3WlKbS4eQek53bjcPbkO4U4doHz9=L09/4vsfIkaUe1+4Py90O0NsLoMjss6bz4eQekprRj6se1+4O0t8J0N/pnMDIrLke1+4Hy9kLzN/ZnbfbuMwe1+3MmqLb4bMFkarMjp3S27EQi9wIzN0DnZrSoJvXlKIY2pTOnpvLkaIgj5MX2+bDjKbSn6DJqLEQi9sKyq8QoOgMy9gXptLNoJ3Xk5v7lZvOiugXyQAA','d')));
