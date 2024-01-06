class PowerBigNumber {
  constructor(num1, num2) {
    this.result = BigInt(num1) ** BigInt(num2);
  }
  get_result() {
    return this.result;
  }
}
class div {
  constructor(num1, num2) {
    this.result = BigInt(num1) / BigInt(num2);
  }
  get_result() {
    return this.result;
  }
}
class multiple {
  constructor(num1, num2) {
    this.result = BigInt(num1) * BigInt(num2);
  }
  get_result() {
    return this.result;
  }
}
class sum {
  constructor(num1, num2) {
    this.result = BigInt(num1 + num2);
  }
  get_result() {
    return this.result;
  }
}
class substract {
  constructor(num1, num2) {
    this.result = BigInt(num1) - BigInt(num2);
  }
  get_result() {
    return this.result;
  }
}
class logaritm {
  constructor(num1, num2) {
    this.result = Math.log(num1) / Math.log(num2);
  }
  get_result() {
    return this.result;
  }
}
$(document).ready(function () {
  $(".changeShow").click(() => {
    if ($(".alert").hasClass("alert_scroll")) {
      $(".alert").removeClass("alert_scroll");
      $(".alert").addClass("alert_w_break");
      $(".changeShow").html("نمایش به صورت اسکرول");
    } else if ($(".alert").hasClass("alert_w_break")) {
      $(".alert").removeClass("alert_w_break");
      $(".alert").addClass("alert_scroll");
      $(".changeShow").html("نمایش به صورت کامل");
    }
  });
  $(".closeWindow").click(() => {
    $(".window").addClass("d-none");
    setTimeout(() => {
      Swal.fire({
        title: "مایلید در سایت ثبت نام کنید؟",
        icon: "question",
        showCloseButton: true,
        showConfirmButton: true,
        confirmButtonText: "ثبت نام",
        html: `<div class="register_form">
        <input class="username" type="text" name="username" id="" placeholder="لطفا نام خود را وارد کنید">
        <input type="email" name="" id="" placeholder="لطفا ایمیل خود را وارد کنید">
      </div>`,
      }).then((res) => {
        var username = $(".username").val();
        if (res.isConfirmed) {
          if (username) {
            Swal.fire({
              title: "ثبت نام با موفقیت انجام شد",
              icon: "success",
              text: `${username} عزیز خوش امدید`,
              showConfirmButton: true,
              confirmButtonText: "حله !",
            });
            setTimeout(() => {
              $(".usernameShow").removeClass("d-none");
              $(".usernameShow").html(username);
            }, 1200);
          }
          else
          {
            Swal.fire({
              title: "ثبت نام با خطا مواجه شد  ",
              icon: "error",
              showConfirmButton: true,
              confirmButtonText: "اوکی !",
            });
          }
        }
      });
    }, 150);
  });
  // این تابع روش دیگری برای محاسبه این اعداد بزرگ است 
  // با استفاده از ارایه ها و یکیسری محاسبات داخل برنامه خروجی را برای ما ریترن میکند
  // اما روشی که بالا استفاده شده است روشی بهینه شده برای زبان جاواسکرپت است
  // =============================================================================================
  // function multiplyBigNumbers(num1, num2) {
  //   let arr1 = num1.split("").map(Number);
  //   let arr2 = num2.split("").map(Number);
  //   let result = new Array(arr1.length + arr2.length).fill(0);
  //   for (let i = arr1.length - 1; i >= 0; i--) {
  //     for (let j = arr2.length - 1; j >= 0; j--) {
  //       let product = arr1[i] * arr2[j];
  //       let position = i + j + 1;
  //       result[position] += product;
  //       if (result[position] >= 10) {
  //         result[position - 1] += Math.floor(result[position] / 10);
  //         result[position] %= 10;
  //       }
  //     }
  //   }
  //   while (result.length > 1 && result[0] === 0) {
  //     result.shift();
  //   }
  //   return result.join("");
  // }
  // ==============================================
  $(".resultbtn").click(() => {
    let num1 = parseInt($(".bignumber1").val());
    let num2 = parseInt($(".bignumber2").val());
    let oprator = $(".selectbox").val();
    if (!oprator || oprator == "notSelected") {
      alert("لطفا عملیات مورد نظر خود را انتخاب کنید!");
    }
    if (!num1 || !num2) {
      alert("(با عدد واقعی)لطفا تمامی فیلد هارو پر کنید !");
    } else {
      if (oprator == 1) {
        let result = new multiple(num1, num2);
        $(".res").text(" ");
        $(".res").append(result.get_result());
        $(".alert").removeClass("d-none");
      }
      if (oprator == 2) {
        let result = new PowerBigNumber(num1, num2);
        $(".res").text(" ");
        $(".res").append(result.get_result());
        $(".alert").removeClass("d-none");
      }
      if (oprator == 3) {
        let result = new div(num1, num2);
        $(".res").text(" ");
        $(".res").append(result.get_result());
        $(".alert").removeClass("d-none");
      }
      if (oprator == 4) {
        let result = new sum(num1, num2);
        $(".res").text(" ");
        $(".res").append(result.get_result());
        $(".alert").removeClass("d-none");
      }
      if (oprator == 5) {
        let result = new substract(num1, num2);
        $(".res").text(" ");
        $(".res").append(result.get_result());
        $(".alert").removeClass("d-none");
      }
      if (oprator == 6) {
        let result = new logaritm(num1, num2);
        $(".res").text(" ");
        $(".res").append(result.get_result());
        $(".alert").removeClass("d-none");
      }
    }
    $(".changeShow").removeClass("d-none");
  });

  // =====================
});