// declare module 'aos' {
//     // Add the necessary type definitions here
//     interface AosOptions {
//         duration?: number;
//         easing?: string;
//         once?: boolean;
//         // Add other options as needed
//     }

//     function init(options?: AosOptions): void;

//     export default {
//         init,
//     };
// }


// src/aos.d.ts
import 'aos';

declare module 'aos' {
    interface AosOptions {
        offset?: number;  // Add the offset property
        duration?: number;
        easing?: string;
        delay?: number;
    }

    interface AOS {
        init(options?: AosOptions): void;
        refresh(): void;
    }

    const AOS: AOS;
    export default AOS;
}
