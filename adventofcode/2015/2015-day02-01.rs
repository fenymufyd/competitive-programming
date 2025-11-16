fn main() {
    const INPT:&str = "";

    let mut position = 0;
    
    for (i,c) in INPT.chars().enumerate() {
        if c == '(' {
            position += 1;
        }else if c == ')' {
            position -= 1;
        }
        // println!("printing : {} position : {}",&c,&position);
        if position == -1 {
            println!("char post : {}",i+1);
            break;
        }
    }

    //answer is 1771
}
