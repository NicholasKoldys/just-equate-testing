type TestSuite = {
    [TestName: string]: [assertion: () => void, testCase: string];
};
interface TestResult {
    [TestName: string]: string;
}
export declare function TestsOf(SectionTitle: string | undefined, suite: TestSuite, options?: {
    cmd: {
        tabbedCMDline: boolean;
    };
}): TestResult;
export declare function FastTestOf(suite: TestSuite): void;
export declare function assert(expression: boolean, isFailureCheck?: boolean): void;
export declare function assertEquals(actual: any, expected: any, isFailureCheck?: boolean): void;
export declare function assertStrictEquals(actual: any, expected: any, isFailureCheck?: boolean): void;