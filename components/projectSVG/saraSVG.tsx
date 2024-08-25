import React from "react";

interface ApplitrackSVGProps {
	height: number;
	width: number;
	viewBox: string;
	className?: string; // Optional className prop
  }
const SaraSVG: React.FC<ApplitrackSVGProps> = ({ height, width, viewBox, className}) => (
	<svg height={height} width={width} viewBox={viewBox} className={className} xmlns="http://www.w3.org/2000/svg">
		<rect width="666" height="513" fill="#D9D9D9" />
		<path fill-rule="evenodd" clip-rule="evenodd" d="M230.62 92C227.38 90.88 220.32 92.46 217.82 92.46C217.36 92.46 217.42 92.82 217.42 93.24C217.42 93.24 215.88 251.8 214.94 347.24C214.5 385.94 214.18 422.94 214.18 422.96C214.8 424.6 218.18 424.12 221.76 423.96C232.62 423.46 232.38 423 232.02 420.9C232.02 76.58 232.76 93 230.62 92ZM230.16 421C225.936 421.563 221.681 421.85 217.42 421.86C217.42 419.42 218.32 106.02 218.54 93.16C225.92 92.52 225.66 92.52 227.38 92.48C228.28 92.48 230.22 92.58 230.66 93.1C230.16 93.5 231 420.8 230.16 421ZM207 268.02C207 282.02 176.84 420.64 176.78 420.86C173.578 421.092 170.362 421.092 167.16 420.86C166.42 420.86 195.82 269.46 195.56 266.74H194.72C194.88 268.12 164.52 420.34 164.82 421.82C165.06 422.82 165.94 422.84 167 422.92C170.626 423.169 174.267 423.095 177.88 422.7C179.32 422.04 181.48 423 203.16 301.38C206.4 283.22 207.66 275.38 207.84 268.6C207.82 267.8 207.96 267.86 207 268.02ZM327.94 247.3C329.433 246.412 331.083 245.821 332.8 245.56C337.62 244.72 346.8 247.36 347.04 239.16C347.206 238.167 347.109 237.147 346.758 236.203C346.407 235.259 345.815 234.424 345.04 233.78C341.04 230.46 332.8 230.9 330.12 227.4C329.58 226.68 330.12 225.4 330.94 224.82C333.32 222.52 338.68 223.72 343.82 222.66C344.939 222.565 346.006 222.151 346.896 221.466C347.786 220.782 348.461 219.857 348.84 218.8C349.464 217.381 349.514 215.775 348.98 214.32C347.14 210.1 341.6 207.9 337.12 206.84C323.38 203.6 306.72 204.12 294.96 211.8C289.44 215.42 289.42 222.38 292.96 225.54C294.362 226.556 295.863 227.427 297.44 228.14C297.64 228.26 302.08 230.66 302.08 232.34C301.84 233.42 300.64 233.92 299.66 234.34C289.2 237.76 290.14 237.16 283.66 240.74C280.42 242.54 278.8 245.78 281.24 248.48C283.68 251.18 287.9 252.28 285.82 254.08C283.166 255.496 280.589 257.051 278.1 258.74C273.48 262.14 269.58 266.88 272.66 271.7C278.8 279.88 291.58 279.86 301.8 279.86C316.64 279 347.34 278.72 361.12 268.88C362.21 268.237 363.086 267.287 363.637 266.148C364.189 265.01 364.391 263.734 364.22 262.48C361.42 246.22 318.62 254.74 327.94 247.3ZM356.46 269.44C343.54 276.48 309.12 277.44 304.46 277.68C295.48 278.08 282.8 278.28 275.96 272.32C273.4 269.72 272.54 267.62 275.68 263.76C276.836 262.484 278.116 261.325 279.5 260.3C282.68 257.86 285.3 257.2 287.1 255.68C292.2 251.42 283.1 249.08 282.16 246.12C281.86 244 284.16 242.8 285.84 241.84C291.1 238.98 291.64 239.24 299.84 236.38C301.276 235.995 302.551 235.161 303.48 234C306.1 230.38 299.86 227.32 295.88 225.22C294.372 224.505 293.208 223.222 292.643 221.652C292.077 220.083 292.155 218.353 292.86 216.84C294.18 213.84 296.86 212.44 299.82 210.96C306.802 207.698 314.459 206.142 322.16 206.42C329.72 206.42 341.66 207.36 346.86 212.8C347.369 213.285 347.767 213.873 348.03 214.525C348.292 215.177 348.411 215.878 348.38 216.58C347.72 225.48 335.48 220.12 330.52 223.84C329.862 224.313 329.355 224.966 329.06 225.72C328.68 226.96 328.62 227.72 330.42 229.18C331.334 229.925 332.379 230.494 333.5 230.86C337.7 232.36 342.98 232.86 345.1 235.74C345.6 236.593 345.843 237.572 345.8 238.56C345.8 241.94 344.68 243.82 339.38 243.88C333.5 243.88 333.08 243.54 329.38 244.9C327.38 245.62 325.74 246.56 325.74 248.66C325.813 249.556 326.187 250.402 326.8 251.06C332.52 257.42 350.24 250.56 359.04 257.58C365.16 262.64 362.46 266.2 356.46 269.44ZM389.88 205C393.64 202.66 393.88 197.26 389.08 194.54C383.26 191.24 378.14 197.22 381.52 199.52C380.4 200.08 378.92 200.86 378.52 201.08C377.707 201.429 377.012 202.005 376.52 202.74C376.19 203.257 376.07 203.881 376.185 204.483C376.3 205.086 376.642 205.621 377.14 205.98C378.646 206.758 380.3 207.209 381.992 207.302C383.685 207.395 385.378 207.129 386.96 206.52C387.972 206.092 388.949 205.583 389.88 205ZM377.88 203.84C378.3 201.24 384.54 200.66 382.2 198.76C379.86 196.86 385.9 192.96 389.7 197.52C390.285 198.175 390.628 199.01 390.672 199.888C390.715 200.765 390.457 201.63 389.94 202.34C388.506 203.675 386.736 204.594 384.82 205C383 205.34 377.8 205.74 377.8 203.86L377.88 203.84ZM365.42 219.22C367.42 220.54 369.42 219.72 372.34 219.78C373.069 219.851 373.803 219.697 374.443 219.34C375.082 218.982 375.598 218.438 375.92 217.78C382.72 204.18 352.36 211 365.42 219.22ZM373 217.7C372.8 217.7 367.5 218.16 366.34 217.38C366.078 217.216 365.855 216.996 365.685 216.737C365.516 216.479 365.405 216.186 365.36 215.88C364.1 210.82 371.58 210.3 373.06 211.46C373.55 211.781 373.959 212.213 374.254 212.719C374.549 213.226 374.723 213.795 374.76 214.38C374.88 215.5 374.3 217.5 373 217.7ZM386.24 213.38C385.529 213.748 384.91 214.271 384.428 214.91C383.945 215.549 383.613 216.288 383.453 217.073C383.294 217.857 383.313 218.668 383.508 219.444C383.703 220.221 384.069 220.944 384.58 221.56C387.94 225.86 392.16 220.72 394.08 220.5C395.32 220.26 398.08 222.26 399.78 220.16C400.38 219.45 400.692 218.54 400.655 217.611C400.618 216.682 400.235 215.8 399.58 215.14C397.737 213.641 395.514 212.683 393.159 212.373C390.804 212.062 388.409 212.411 386.24 213.38ZM397.4 219.38C395.88 219.02 394.9 218.12 392.96 218.8C391.32 219.38 389.78 220.8 388.26 221.16C387.954 221.249 387.629 221.251 387.322 221.167C387.015 221.082 386.737 220.913 386.52 220.68C386.131 220.318 385.831 219.872 385.641 219.376C385.452 218.879 385.378 218.346 385.426 217.817C385.475 217.288 385.643 216.778 385.92 216.324C386.196 215.87 386.572 215.486 387.02 215.2C388.277 214.458 389.672 213.982 391.12 213.8C392.568 213.617 394.038 213.733 395.44 214.14C401 215.32 399.42 219.8 397.4 219.32V219.38Z" fill="black" />
		<path fill-rule="evenodd" clip-rule="evenodd" d="M497 402.54C497.664 402.56 498.315 402.348 498.84 401.94C508.32 393.94 488.04 233.94 479.42 229.94C485.42 220.24 484.74 207.74 484.66 196.56C484.54 179.56 481.44 171.02 476.08 162.56C464.9 144.76 447.52 137.74 426.08 141.28C425.74 139.86 424.68 136.54 423.8 133.88C432.12 134.06 443.34 127.64 448.76 122.8C451.243 120.871 453.155 118.305 454.292 115.374C455.43 112.443 455.751 109.259 455.22 106.16C455.08 104.467 454.744 102.796 454.22 101.18C458.6 99.7 460.76 94.96 462.46 90.48C466.1 80.68 458.08 67 447 67C440.16 67 433.34 70.62 432.68 77.2C425.14 74.98 417.46 75.2 410.68 80.06C408.274 81.7308 406.165 83.7926 404.44 86.16C401.12 86.16 398.6 86.54 396.44 89.68C395.168 91.6926 394.185 93.8739 393.52 96.16C393.331 96.2867 393.156 96.4343 393 96.6C392.195 96.2528 391.327 96.0736 390.45 96.0736C389.573 96.0736 388.705 96.2528 387.9 96.6C387.084 96.9267 386.341 97.4111 385.713 98.0254C385.085 98.6397 384.585 99.3719 384.24 100.18C384.44 100.54 383.7 101.36 385.76 100.18C386.894 99.4569 388.092 98.8409 389.34 98.34C390.153 98.1341 390.983 98.0002 391.82 97.94C386.94 104.06 388.88 113.68 388.88 115.74C388.34 116.84 387.86 118.06 386.88 120.26C385.9 122.46 388.16 123.92 390.36 123.58C390.874 126.554 392.072 129.368 393.86 131.8C395.465 133.88 397.515 135.575 399.86 136.76C402.28 137.44 405 137.08 407.22 137.64C407.5 137.64 407.44 137.2 408 142.4C408 143.08 408.26 145.06 408.3 145.94C397.62 150.5 388.04 161.48 382.66 171.48C382.02 172.64 380.9 175.06 379.88 177.48C379.5 109.96 378.32 110.46 377.54 109.74C377.06 109.38 257.36 111.74 256.9 111.86C256.705 111.871 256.519 111.948 256.373 112.079C256.228 112.21 256.132 112.387 256.1 112.58H255.52C255.52 289.86 255.08 293.56 255.14 293.76C255.202 294.012 255.345 294.237 255.547 294.4C255.75 294.563 256 294.654 256.26 294.66C257.4 294.86 357.76 292.66 375.48 292.22C372.82 311.96 371.72 331.4 370.78 344.22C370.42 365.22 370.32 351.9 371.64 409.24C371.648 409.4 371.694 409.556 371.774 409.695C371.854 409.834 371.966 409.952 372.1 410.04C372.981 410.388 373.891 410.656 374.82 410.84C369.84 423.54 369.04 425.62 368.82 425.88C363.758 425.492 358.671 425.553 353.62 426.06C351.2 426.36 347.9 428.06 348.94 430.06C349.98 432.06 375.84 439.84 378.18 439.44C378.566 439.369 378.918 439.172 379.18 438.88C379.927 437.649 380.449 436.294 380.72 434.88C381 433.94 385.2 421.66 387.9 414.44L390.04 415.02C390.215 415.04 390.392 415.014 390.554 414.944C390.715 414.873 390.855 414.762 390.96 414.62C409.38 388.92 421.22 360.78 428.96 330.62C422.53 313.289 417.749 295.389 414.68 277.16C414.38 275.3 412.38 262.9 413.08 262.5C416.44 261.36 415.08 311.44 452 369.42C459.411 381.679 467.847 393.287 477.22 404.12C477.72 404.7 477.22 404.84 482.86 404.12C483.42 411.14 484.58 430.12 484.6 430.3C479.58 434.98 470.4 442.04 469.54 444.52C469.385 444.912 469.368 445.346 469.491 445.749C469.615 446.153 469.872 446.502 470.22 446.74C472.52 448.28 494.12 440.58 496.1 439.82C498.92 438.72 499.98 438.52 499.78 435.68C499.1 430.02 497.48 411 497 402.54ZM408.74 149C409.98 147.44 410.38 147.52 410.38 146.56C410.262 143.198 409.854 139.852 409.16 136.56C408.06 134.84 402.34 135.58 400.34 134.84C397.302 133.133 394.89 130.498 393.46 127.32C391.78 123.12 392.6 121.42 390.12 121.76C388.5 122 388.62 121.34 388.42 121.34C388.22 121.34 388.42 121.34 388.94 120.04C389.72 118.04 389.94 117.52 390.5 116.32C390.76 115.62 388 101.32 393.98 97.54C394.98 98.68 399.02 104.9 401.5 107.54C405.449 111.338 410.249 114.136 415.5 115.7C416.14 115.7 419.04 111.7 422.22 112.96C423.626 113.603 424.729 114.764 425.3 116.2C426.141 118.616 426.141 121.244 425.3 123.66C425.182 124.011 424.981 124.328 424.714 124.585C424.447 124.842 424.122 125.03 423.766 125.134C423.411 125.238 423.036 125.255 422.672 125.183C422.309 125.111 421.969 124.952 421.68 124.72C420.64 124.58 420.48 125.34 420.42 126.3C420.42 131.82 420 127.9 424.1 141.94C423.62 143.82 418.8 150.1 413.32 153.3C411.64 154.28 410 155.1 408.32 154.14C406.64 153.18 407.4 150.7 408.74 149ZM406.46 155.32C407.211 155.998 408.147 156.436 409.148 156.578C410.149 156.721 411.17 156.561 412.08 156.12C417.881 153.475 422.648 148.99 425.64 143.36C426.2 143.36 426.76 143.2 427.34 143.12C425.812 145.768 424.476 148.522 423.34 151.36C419.88 159.36 420.74 156.78 418.34 167.88C413.458 168.393 408.525 168.096 403.74 167C403.88 164.86 405.6 158.72 406.46 155.34V155.32ZM400.78 180.54C401.22 180.12 419.08 179.96 419.2 180.06C419.615 182.708 419.862 185.38 419.94 188.06C414.2 185.76 409.1 185.72 400.9 186.06C400.73 184.232 400.69 182.394 400.78 180.56V180.54ZM397.34 155.6C394.948 165.77 393.68 176.173 393.56 186.62C387.859 187.571 382.327 189.35 377.14 191.9C372.979 193.763 368.967 195.943 365.14 198.42C362.287 200.475 359.873 203.08 358.04 206.08C352.34 194.78 346.2 178.48 345.76 174.26C347.6 173.42 355.18 170.14 357.04 169.5C357.4 169.38 376.88 184.46 377.04 184.64C375.992 186.621 375.314 188.776 375.04 191C375.04 192.34 374.9 191.98 375.24 192.64C379.14 190.56 379.2 172.56 397.34 155.6ZM321.46 164.08C321.639 163.014 321.639 161.926 321.46 160.86C323.78 160.22 332.48 159.4 335.9 158.86C335.387 159.144 334.96 159.559 334.662 160.064C334.365 160.569 334.208 161.144 334.208 161.73C334.208 162.316 334.365 162.891 334.662 163.396C334.96 163.901 335.387 164.316 335.9 164.6C330.8 165.36 323 166.3 320.66 166.82C320.999 165.929 321.266 165.013 321.46 164.08ZM311.46 170.92C308.169 171.249 304.857 170.55 301.98 168.92C299.928 167.189 298.306 165.006 297.241 162.542C296.175 160.078 295.696 157.4 295.84 154.72C295.88 152.693 296.401 150.705 297.36 148.92C298.02 147.84 299.06 146.02 300.26 145.94C301.4 146.5 300.48 147.68 304.64 151.94C307.96 154.72 310.1 152.74 315.42 154.98C323.74 159 321.9 170.2 311.42 171L311.46 170.92ZM321.32 159.98C321.134 158.857 320.696 157.79 320.04 156.86C316.42 152 310.74 152.06 308.48 151.68C306.82 151.28 306.08 151.04 303.78 147.86C302.7 146.36 302.54 143.86 300.32 143.86C299.539 143.918 298.785 144.174 298.131 144.604C297.476 145.035 296.942 145.625 296.58 146.32C291.28 153 293.7 165 300.2 170.1C304.46 173.44 314.92 174.1 319.94 167.9C322.08 167.66 324.34 167.44 326.66 167.22C323.14 170.28 319.78 172.96 312.8 178.1C300.14 187.4 301.8 185.92 300.8 186.58C296.25 189.458 290.842 190.667 285.5 190C278.38 188.94 275.66 184.68 276.26 177.6C277.06 167.84 280.88 164.02 281.18 160.04C281.209 159.53 281.169 159.019 281.06 158.52C280.34 155.82 275.32 157.54 274.06 153.3C273.3 150.74 275.74 141.98 282.44 135.3C291.243 127.131 302.094 121.498 313.84 119C315.565 118.521 317.351 118.299 319.14 118.34C321.814 118.05 324.501 118.763 326.68 120.34C327.7 121.104 328.477 122.147 328.917 123.343C329.357 124.539 329.441 125.837 329.16 127.08C328.78 129.42 327.16 132.1 327.64 134.92C328.12 137.74 330.76 137.56 333.64 137.34C334.645 137.27 335.656 137.344 336.64 137.56C345.72 138.58 348.64 142.82 344.1 150.62C342.34 150.62 340.66 151.9 340.48 154.94L338.24 156.94C321.28 159.82 322.36 159.58 321.28 159.98H321.32ZM342.5 155.8C342.459 155.121 342.554 154.441 342.78 153.8C343.52 151.44 346.44 153.32 348.08 155.18C346.242 155.631 344.352 155.839 342.46 155.8H342.5ZM367.14 157.06C367.46 158.42 365.7 159.4 364.36 159.96C361.04 161.4 347.6 162.76 346.72 162.74C346.275 161.596 345.555 160.58 344.624 159.781C343.692 158.982 342.578 158.425 341.38 158.16C357.72 155.72 365.68 153.78 367.1 157L367.14 157.06ZM345 164C345.172 164.406 345.473 164.743 345.856 164.96C346.24 165.177 346.684 165.261 347.12 165.2C348.26 165.06 349.66 164.86 351.42 164.58C353.18 164.3 354.46 164.1 355.18 163.96C355.539 165.343 355.819 166.745 356.02 168.16C356.28 168.16 352.48 169.44 345.44 172.78C344.8 171.44 343.74 168.64 343.04 166.78C342.831 166.239 342.504 165.751 342.081 165.353C341.659 164.955 341.153 164.657 340.6 164.48C338.82 163.96 336.6 163.02 336.3 162.26C335.28 160.76 340.6 158.26 343.98 162.08C344.285 162.47 344.535 162.901 344.72 163.36L345 164ZM257.44 292.58V113.42C367.24 110.34 376.42 110.24 377.06 110.6C377.6 112.6 377.58 116.3 378.08 181.76C377.94 182.16 377.82 182.5 377.74 182.76C377.48 182.56 358.7 168.64 358.1 168.04C357.5 167.44 357.5 167.72 357 167.84C356.915 166.43 356.742 165.028 356.48 163.64C358.48 162.98 362.58 163.42 366.48 161.2C368.88 159.86 370.06 157.62 368.48 155.2C365.96 152.12 360.22 153 349.18 155C348.426 153.343 347.193 151.95 345.64 151C345.64 150.8 355.88 136.26 334.26 135.26C332.891 135.416 331.509 135.416 330.14 135.26C328.28 133.56 331.22 129.04 331.22 126.14C331.328 124.697 331.065 123.25 330.456 121.937C329.847 120.624 328.912 119.489 327.74 118.64C325.431 116.945 322.599 116.117 319.74 116.3C308.3 116.14 287.96 126.46 279.86 136.3C275 142.3 272.74 149 273 152.84C273.62 157.14 277.56 157.32 278.82 157.86C279.6 158.2 280 158.56 280 159.38C280.24 162.08 277.72 164.34 275.74 172.06C274.58 176.6 273.74 182.24 276.2 186.44C277.312 188.027 278.77 189.339 280.465 190.278C282.159 191.217 284.045 191.758 285.98 191.86C290.998 192.395 296.06 191.398 300.5 189C306.26 185.9 326.12 170.88 330.5 166.9C339.42 166.06 340.26 165.8 340.68 166.5C345.1 173.72 343.22 179.54 357.4 207.08C353.96 213.46 353.88 220.74 360.2 225.08C365.637 228.336 371.863 230.037 378.2 230C378.2 252.92 378.2 266.78 378.04 275.26C377.1 280.2 376.3 285.26 375.58 290.26C283 292.4 257.44 292.5 257.44 292.58ZM377.86 437.48C373.86 437.18 352.36 430.14 351.04 429.28C349.9 427 369.7 427.56 369.9 427.44C370.1 427.32 369.9 427.82 373.62 417.1C377.147 418.281 380.583 419.718 383.9 421.4C377.38 437.58 378.76 436.46 377.86 437.48ZM384.62 420.14C381.138 418.611 377.557 417.322 373.9 416.28C374.4 414.74 375 413 375.68 411L387.2 414.18C386.24 416.38 385.38 418.36 384.62 420.14ZM379.92 267V229.96C385.44 229.68 390.72 229.32 396.18 228.5C388.7 237 383.54 251.14 379.92 267ZM383.26 228.78C376.48 229.32 377.06 229.6 370.42 228.06C364.78 226.74 358.9 224.22 357.08 218.74C355.62 213.18 358.2 204.98 367.28 199.32C373.013 195.721 379.183 192.871 385.64 190.84C393.38 188.34 396.08 188.22 406.08 188.1C412.853 187.85 419.561 189.507 425.44 192.88C427.038 193.784 428.423 195.02 429.503 196.504C430.584 197.988 431.334 199.686 431.703 201.484C432.073 203.282 432.053 205.138 431.645 206.928C431.238 208.718 430.452 210.399 429.34 211.86C427.44 214.16 419.54 219.06 417.86 219.98C415.46 215.46 409.26 210.96 405.38 215.18C403.7 217.02 404.86 219.18 406.52 221.18C407.325 222.089 408.201 222.931 409.14 223.7C400.824 226.7 392.094 228.4 383.26 228.74V228.78ZM411.52 231.24C408.96 231.38 401.24 230.7 398.22 228.2C398.58 227.82 398.9 227.5 399.2 227.22C415.2 223.42 411.2 224.5 408.18 221.36C405.7 218.76 404.18 216.62 407.48 214.9C411.94 212.5 417.26 220.9 417.48 220.9C419.8 222.1 421.04 222.26 421.2 223.84C418.5 227.3 411.52 231.2 411.52 231.2V231.24ZM464.66 240.32C451 247.82 437.86 247.36 426.3 241.76C421.094 239.336 416.449 235.856 412.66 231.54C412.98 231.24 421.04 228.54 422.32 224.32C424.98 222.58 436.98 226.5 437.34 226.32C437.7 226.14 441.34 216.7 454.8 204.5C459.6 201.8 455.92 201.56 451.98 204.14C446.82 207.54 446.14 208.6 444.66 211.18C443.76 210.26 442.02 208.54 437.06 203.18C428.28 193.54 424.22 167.52 430.52 155.9C435.2 147.24 445.54 141.3 454.16 145.42C468.72 152.36 481.84 168.2 482.5 193.64C483 216.26 483.32 230.04 464.66 240.28V240.32ZM484.1 404.1L495.94 402.68C495.94 406.68 496.14 411.74 496.38 416.9C494.98 417.12 492 417.8 485.56 418.64C485 413 484.4 406.86 484.1 404.06V404.1ZM497.88 437C494.76 438.78 471.44 445.82 471.88 445C473.06 443 486.62 431.92 486.68 431C486.88 430.62 485.76 420.16 485.74 419.96C486.18 419.96 483.9 420.36 496.46 417.74C497.24 435.36 498.42 436.54 497.88 437Z" fill="black" />
		<path fill-rule="evenodd" clip-rule="evenodd" d="M392.52 110.62V112.22C392.582 112.437 392.713 112.629 392.894 112.765C393.074 112.901 393.294 112.974 393.52 112.974C393.746 112.974 393.966 112.901 394.146 112.765C394.327 112.629 394.458 112.437 394.52 112.22C394.553 111.801 394.553 111.379 394.52 110.96C395 109.16 392.38 109 392.52 110.62ZM401.28 125.54C400.62 126.26 400.28 128.54 397.44 128.98V129.4C397.959 129.532 398.503 129.533 399.023 129.404C399.543 129.274 400.023 129.017 400.419 128.656C400.816 128.296 401.117 127.842 401.295 127.337C401.473 126.831 401.523 126.29 401.44 125.76L401.28 125.54Z" fill="black" />
	</svg>
)

export default SaraSVG;