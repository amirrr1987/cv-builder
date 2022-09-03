export function useDesign(scope: string) {
    const prefixCls = 'amirmaghami'
    return {
        prefixCls: `${prefixCls}-${scope}`,
        prefixVar: prefixCls,
    };
}
