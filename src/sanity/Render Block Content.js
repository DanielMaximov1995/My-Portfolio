// "client" module
export const renderBlockContent = (blocks) => {
    return blocks.map((block) => {
        return (
            <div key={block._key}>
                {block.children.map((child) => {
                    if (child._type === 'span') {
                        return (
                            <span key={child._key} className={getChildClassNames(child.marks)}>
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
    // Handle custom marks, if any
    // (e.g., 'strong' and 'code' in your provided block content)
    const customMarks = marks.filter((mark) => mark !== 'strong' && mark !== 'code');
    const customClassNames = customMarks.map((mark) => `custom-mark-${mark}`);

    // Combine the custom class names with any default marks (e.g., 'strong', 'code')
    const defaultClassNames = marks.filter((mark) => mark === 'strong' || mark === 'code');

    return [...defaultClassNames, ...customClassNames].join(' ');
};
