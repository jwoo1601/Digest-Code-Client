import axios from 'axios';
import { ICommentable } from 'api/digestCode/commentsAPI';

export interface ICourseSummary extends ICommentable {
    code: string;
    name: string;
    description: string;
}

export interface ICourseChapter {}

export interface ICourseDetail extends ICourseSummary {
    chapters: ICourseChapter[];
    languages: string[];
}

function getAuthenticationHeader() {}

function getAuthorizationHeader() {}

export async function getCourseSummary(code: string): Promise<ICourseSummary> {
    try {
        axios.get(`https://api.digestcode.azurewebsite.net/v1/course/${code}`, {
            headers: {},
        });
    } catch (err) {}
}
