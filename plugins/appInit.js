import {UsersService} from "@/services/local/users.service";
import {AuthAction} from "@/store/types.actions";
import {CartService} from "@/services/local/cart.service";

export default ({store}) => {
    UsersService.init();
    //test to push braanch
    const user = UsersService.getUser();
    if (user && user.username) {
        store.commit(AuthAction.local.SET_USER, user);
    }

    const cart = CartService.getCart();
    store.commit('cart/SET_CART_ITEMS', cart);
    
}