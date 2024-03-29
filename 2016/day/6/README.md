## --- Day 6: Signals and Noise ---

Something is jamming your communications with Santa. Fortunately, your signal is only partially jammed, and protocol in situations like this is to switch to a simple [repetition code](https://en.wikipedia.org/wiki/Repetition_code) to get the message through.

In this model, the same message is sent repeatedly. You've recorded the repeating message signal (your puzzle input), but the data seems quite corrupted - almost too badly to recover. _Almost_.

All you need to do is figure out which character is most frequent for each position. For example, suppose you had recorded the following messages:

    eedadn
    drvtee
    eandsr
    raavrd
    atevrs
    tsrnev
    sdttsa
    rasrtv
    nssdts
    ntnada
    svetve
    tesnvt
    vntsnd
    vrdear
    dvrsen
    enarar

The most common character in the first column is `e`; in the second, `a`; in the third, `s`, and so on. Combining these characters returns the error-corrected message, `easter`.

Given the recording in your puzzle input, _what is the error-corrected version_ of the message being sent?

Your puzzle answer was `xdkzukcf`.

## --- Part Two ---

Of course, that _would_ be the message - if you hadn't agreed to use a _modified repetition code_ instead.

In this <span title="*Please* don't try this at home.">modified code</span>, the sender instead transmits what looks like random data, but for each character, the character they actually want to send is _slightly less likely_ than the others. Even after signal-jamming noise, you can look at the letter distributions in each column and choose the _least common_ letter to reconstruct the original message.

In the above example, the least common character in the first column is `a`; in the second, `d`, and so on. Repeating this process for the remaining characters produces the original message, `advent`.

Given the recording in your puzzle input and this new decoding methodology, _what is the original message_ that Santa is trying to send?

Your puzzle answer was `cevsgyvd`.

Both parts of this puzzle are complete! They provide two gold stars: \*\*

At this point, you should [return to your Advent calendar](/2016) and try another puzzle.

If you still want to see it, you can [get your puzzle input](6/input).

You can also <span class="share">[Share<span class="share-content">on [Twitter](https://twitter.com/intent/tweet?text=I%27ve+completed+%22Signals+and+Noise%22+%2D+Day+6+%2D+Advent+of+Code+2016&url=https%3A%2F%2Fadventofcode%2Ecom%2F2016%2Fday%2F6&related=ericwastl&hashtags=AdventOfCode) [Mastodon](<javascript:void(0);>)</span>]</span> this puzzle.
