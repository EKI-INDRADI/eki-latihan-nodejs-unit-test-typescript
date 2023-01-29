import {UserRepository} from "./user-repository";

export class UserService {
	public userRepository: any;

    constructor(userRepository) {
        if (userRepository) {
            this.userRepository = userRepository;
        } else {
            this.userRepository = new UserRepository();
        }
    }

    save(user  : any) {
        this.userRepository.save(user);
    }

    findById(id  : any) {
        return this.userRepository.findById(id);
    }

    findAll() {
        return this.userRepository.findAll();
    }

}