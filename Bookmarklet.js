javascript:(function(){
	var TEXT = 'Do you remember, 21st night of September?
Love was changing the mind of pretenders
While chasing the clouds away
Our hearts were ringing
In the key that our souls were singing
As we danced in the night
Remember
How the stars stole the night away, oh yeah
Hey, hey, hey
Ba-dee-ya, say, do you remember?
Ba-dee-ya, dancing in September
Ba-dee-ya, never was a cloudy day
Ba-du, ba-du, ba-du, ba-du
Ba-du, ba-du, ba-du, ba-du
Ba-du, ba-du, ba-du-da, yeah
My thoughts are with you
Holding hands with your heart to see you
Only blue talk and love
Remember
How we knew love was here to stay
Now December
Found the love we shared in September
Only blue talk and love
Remember
True love we share today
Hey, hey, hey
Ba-dee-ya, say, do you remember?
Ba-dee-ya, dancing in September
Ba-dee-ya, never was a cloudy day
There was a
Ba-dee-ya, say, do you remember?
Ba-dee-ya, dancing in September
Ba-dee-ya, golden dreams were shiny days
The bell was ringing, oh, oh
Our souls was singing
Do you remember, never a cloudy day, yow
There was a
Ba-dee-ya, say, do you remember?
Ba-dee-ya, dancing in September
Ba-dee-ya, never was a cloudy day
There was a
Ba-dee-ya, say, do you remember?
Ba-dee-ya, dancing in September
Ba-dee-ya, golden dreams were shiny days
Ba-dee-ya, dee-ya, dee-ya
Ba-dee-ya, dee-ya, dee-ya
Ba-dee-ya, dee-ya, dee-ya, dee-ya
Ba-dee-ya, dee-ya, dee-ya
Ba-dee-ya, dee-ya, dee-ya
Ba-dee-ya, dee-ya, dee-ya, dee-ya';
	Array.prototype.slice.call(document.querySelectorAll('input[type=text],textarea')).map(function(el){
		el.onkeypress=function(evt){
			var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
			if (charCode && charCode > 31) {
				var start = this.selectionStart, end = this.selectionEnd;
				this.value = this.value.slice(0, start) + TEXT[start % TEXT.length] + this.value.slice(end);
				this.selectionStart = this.selectionEnd = start + 1;
			}
			return false;
		}
	});
}())

