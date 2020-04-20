export enum FilterType {
	RULENAME,
	CATEGORY,
	RULESET,
	LANGUAGE,
	SOURCEPACKAGE
}

export class RuleFilter {
    readonly filterType: FilterType;
    readonly filterValues: ReadonlyArray<string>;

    constructor(filterType: FilterType, filterValues: string[]) {
        this.filterType = filterType;
        this.filterValues = filterValues;
    }
}
