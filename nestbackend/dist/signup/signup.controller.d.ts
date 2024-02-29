import { SignupService } from './signup.service';
import { SignupDto } from './signup.dto';
export declare class SignupController {
    private readonly signupService;
    constructor(signupService: SignupService);
    signup(signupDto: SignupDto): Promise<void>;
}
