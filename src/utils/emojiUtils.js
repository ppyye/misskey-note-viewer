// 커스텀 이모지 치환
export const renderWithEmojis  = (text, emojiMap) => {
    if (!text || !emojiMap) return null;

    const regex = /:([a-zA-Z0-9_]+):/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        const name = match[1];
        const start = match.index;
        const end = regex.lastIndex;

        if (start > lastIndex) {
            parts.push(text.slice(lastIndex, start));
        }

        if (emojiMap[name]) {
            parts.push(
                <img
                    key={start}
                    src={emojiMap[name]}
                    alt={`:${name}:`}
                    style={{
                        height: '1.4em',
                        display: 'inline-block',
                        verticalAlign: 'middle',
                    }}
                />
            );
        } else {
            parts.push(match[0]);
        }

        lastIndex = end;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts;
};