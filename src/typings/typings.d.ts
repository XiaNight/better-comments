interface CommentTag {
    tag: string;
    escapedTag: string;
    decoration: any;
    ranges: Array<any>;
}

interface Contributions {
    multilineComments: boolean;
    useJSDocStyle: boolean;
    highlightPlainText: boolean;
    tags: [{
        tag: string;
        color: string;
        strikethrough: boolean;
        underline: boolean;
        bold: boolean;
        italic: boolean;
		backgroundColor: string;
		isRegex: boolean;
    }];
}

interface CommentConfig {
    lineComment?: string;
    blockComment?: [string, string];
}