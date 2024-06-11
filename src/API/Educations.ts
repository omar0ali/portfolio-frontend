export default interface Educations {
    count: number;
    educations: {
        id: number;
        school_name: string;
        degree: string;
        started_date: string;
        end_date: string;
        school_address: string;
        source: string;
    }[];
}
