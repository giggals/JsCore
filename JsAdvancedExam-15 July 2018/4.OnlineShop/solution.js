function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let product = $('.custom-select');
    let button = $('#submit');

    product.on('input', () =>{ 
        let isEmpty = product.val() === '';
        button.attr('disabled', isEmpty);
    });

    let capacityCount = 0;
    let totalPrice = 0;

    button.on('click', function () {
        let productValue = product.val();
        let priceValue = +$('#price').val();
        let quantityValue = +$('#quantity').val();
        let priceElement = $('#sum');

        if(productValue && priceValue && quantityValue){
            totalPrice += priceValue;

            let ulItem = $('.display');
            let li = $(`<li>Product: ${productValue} Price: ${priceValue} Quantity: ${quantityValue}</li>`);
            ulItem.append(li);
    
            priceElement.val(totalPrice);
    
            capacityCount += quantityValue;
            let capacityElement = $('#capacity');
            if (capacityCount == 150) {
                capacityElement.addClass('fullCapacity');
                capacityElement.val(`full`);
                product.val('');
                $('#price').val('');
                $('#quantity').val('');
                button.attr('disabled', true);
                product.prop('disabled', true);
                $('#price').prop('disabled', true);
                $('#quantity').prop('disabled', true);
                button.prop('disabled', true);
            }
            else {
                capacityElement.val(`${capacityCount}`);
                product.val('');
                $('#price').val('');
                $('#quantity').val('');
                button.attr('disabled', true);
            }
    
        }

        

    });


}
