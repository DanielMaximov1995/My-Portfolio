// "client" module
export const renderBlockContent = (blocks) => {
    return blocks.map((block) => {
        return (
            <div key={block._key} className='text-center md:text-left'>
                {block.children.map((child) => {
                    if (child._type === 'span') {
                        return (
                            <span key={child._key} className={child.marks.join(" ")}>
                                {child.text}
                            </span>
                        );
                    }
                    return null;
                })}
            </div>
        );
    });
};

const getChildClassNames = (marks) => {
    const customClassNames = customMarks.map((mark) => `${mark}`);

    return [...customClassNames].join(' ');
};
